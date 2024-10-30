import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController{

  static async listarLivros(req,res,next){  // Busca o livro la no mongo
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch(erro){
      next(erro);
    }
  }

  static async listarLivro(req,res,next){  // Busca o livro la no mongo
    try {
      const id = req.params.id;
      const listaLivroEncontrado = await livro.findById(id);
      res.status(200).json(listaLivroEncontrado);
    } catch(erro){
      next(erro);
    }
  }
 
  static async cadastrarLivro(req,res,next){ // Cria o livro la no mongo
    const novoLivro = req.body;
    try {
      //const novoLivro = await livro.create(req.body);
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {...novoLivro,autor: {...autorEncontrado._doc}};
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({messege: "livros Cadastrado com sucesso!", livro: livroCriado});
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req,res,next){  // atualiza o livro la no mongo
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id,req.body);
      res.status(201).json({messege: "livros atualizado com sucesso!"});
    } catch(erro){
      next(erro);
    }
  }

  static async deletarLivro(req,res,next){  // remove o livro la no mongo
    try {
      const id = req.params.id;
      await livro.findByIdAndRemove(id);
      res.status(201).json({messege: "livros excluido com sucesso!"});
    } catch(erro){
      next(erro);
    }
  }

  static async listarLivrosPorEditora(req,res,next){
    const editora = req.query.editora;
    try{
      const livroPorEditora = await livro.find({editora: editora});
      res.status(200).json(livroPorEditora);
    }catch(erro){
      next(erro);
    }
  }

}

export default LivroController;