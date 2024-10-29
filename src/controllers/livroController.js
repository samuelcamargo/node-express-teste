import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController{

 static async listarLivros(req,res){  // Busca o livro la no mongo
  try {
   const listaLivros = await livro.find({});
   res.status(200).json(listaLivros);
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição`});
  }
 }

 static async listarLivro(req,res){  // Busca o livro la no mongo
  try {
   const id = req.params.id;
   const listaLivroEncontrado = await livro.findById(id);
   res.status(200).json(listaLivroEncontrado);
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição do livro`});
  }
 }
 
 static async cadastrarLivro(req,res){ // Cria o livro la no mongo
  const novoLivro = req.body;
  try {
   //const novoLivro = await livro.create(req.body);
   const autorEncontrado = await autor.findById(novoLivro.autor);
   const livroCompleto = {...novoLivro,autor: {...autorEncontrado._doc}};
   const livroCriado = await livro.create(livroCompleto);
   res.status(201).json({messege: "livros Cadastrado com sucesso!", livro: livroCriado});
  } catch (erro) {
   res.status(500).json({messege: `${erro.messege} - falha ao cadastrar livro`});
  }
 }

 static async atualizarLivro(req,res){  // atualiza o livro la no mongo
  try {
   const id = req.params.id;
   await livro.findByIdAndUpdate(id,req.body);
   res.status(201).json({messege: "livros atualizado com sucesso!"});
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição do livro`});
  }
 }

 static async deletarLivro(req,res){  // remove o livro la no mongo
  try {
   const id = req.params.id;
   await livro.findByIdAndRemove(id);
   res.status(201).json({messege: "livros excluido com sucesso!"});
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição do livro`});
  }
 }

 static async listarLivrosPorEditora(req,res){
  const editora = req.query.editora;
  try{
   const livroPorEditora = await livro.find({editora: editora});
   res.status(200).json(livroPorEditora);
  }catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na busca`});
  }
 }

}

export default LivroController;