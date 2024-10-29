import {autor} from "../models/Autor.js";

class AutorController{

 static async listarAutores(req,res){  // Busca o autor la no mongo
  try {
   const listaAutores = await autor.find({});
   res.status(200).json(listaAutores);
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição`});
  }
 }

 static async listarAutor(req,res){  // Busca o autor la no mongo
  try {
   const id = req.params.id;
   const listaAutorEncontrado = await autor.findById(id);
   res.status(200).json(listaAutorEncontrado);
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição do autor`});
  }
 }
 
 static async cadastrarAutor(req,res){ // Cria o autor la no mongo
  try {
   const novoAutor = await autor.create(req.body);
   res.status(201).json({messege: "autors Cadastrado com sucesso!", autor: novoAutor});
  } catch (erro) {
   res.status(500).json({messege: `${erro.messege} - falha ao cadastrar autor`});
  }
 }

 static async atualizarAutor(req,res){  // atualiza o autor la no mongo
  try {
   const id = req.params.id;
   await autor.findByIdAndUpdate(id,req.body);
   res.status(201).json({messege: "autors atualizado com sucesso!"});
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição do autor`});
  }
 }

 static async deletarAutor(req,res){  // remove o autor la no mongo
  try {
   const id = req.params.id;
   await autor.findByIdAndRemove(id);
   res.status(201).json({messege: "autors excluido com sucesso!"});
  } catch(erro){
   res.status(500).json({messege: `${erro.messege} - falha na requisição do autor`});
  }
 }

}

export default AutorController;