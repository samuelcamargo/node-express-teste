import {autor} from "../models/Autor.js";

class AutorController{

  static async listarAutores(req,res,next){  // Busca o autor la no mongo
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch(erro){
      next(erro);
    }
  }

  static async listarAutor(req,res,next){  // Busca o autor la no mongo
    try {
      const id = req.params.id;
      const listaAutorEncontrado = await autor.findById(id);
      res.status(200).json(listaAutorEncontrado);
    } catch(erro){
      next(erro);
    }
  }
 
  static async cadastrarAutor(req,res,next){ // Cria o autor la no mongo
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({messege: "autors Cadastrado com sucesso!", autor: novoAutor});
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req,res,next){  // atualiza o autor la no mongo
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id,req.body);
      res.status(201).json({messege: "autors atualizado com sucesso!"});
    } catch(erro){
      next(erro);
    }
  }

  static async deletarAutor(req,res,next){  // remove o autor la no mongo
    try {
      const id = req.params.id;
      await autor.findByIdAndRemove(id);
      res.status(201).json({messege: "autors excluido com sucesso!"});
    } catch(erro){
      next(erro);
    }
  }

}

export default AutorController;