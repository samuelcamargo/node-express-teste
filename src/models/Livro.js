import mongoose from "mongoose";
import { autorSchema } from "./index.js";

const livrosSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  titulo:{type: String, required: [true, "O Titulo é obrigatorio"]},
  editora:{type: String},
  preco:{type: Number},
  paginas:{type: Number},
  autor: autorSchema
},{versionKey: false});

const livro = mongoose.model("livros", livrosSchema);

export {livro};