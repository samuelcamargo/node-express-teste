import { livro, autor } from "../models/index.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

class LivroController{

  static async listarLivros(req,res,next){  // Busca o livro la no mongo
    try {
      let {limit = 5, page = 1} = req.query;
      limit = parseInt(limit);
      page = parseInt(page);
      if(limit > 0 && page > 0){
        const listaLivros = await livro.find({})
          .sort({ _id: -1})
          .skip((page - 1) * limit)
          .limit(limit);      ;
        res.status(200).json(listaLivros);
      } else {
        next(new RequisicaoIncorreta());
      }
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
      res.status(201).json({messege: "livros Cadastrado com sucesso", livro: livroCriado});
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

  static async listarLivrosPorfiltro(req,res,next){
    const {editora, titulo} = req.query;
    try{
      const livroPorEditora = await livro.find({
        editora: editora,
        titulo: titulo
      });
      res.status(200).json(livroPorEditora);
    }catch(erro){
      next(erro);
    }
  }

}

export default LivroController;