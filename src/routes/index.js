import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autorRoutes.js";

const routes = (app) => {
  app.route("/").get((req,res) => { res.send(200,'Curso de Node.js')});
  app.use(express.json(),livros,autores);
}
export default routes;