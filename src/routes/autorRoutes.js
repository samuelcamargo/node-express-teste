import express from "express";
import AutorController from "../controllers/autorControlle.js";

const routes = express.Router();
routes.get("/autor", AutorController.listarAutores);
routes.get("/autor/:id", AutorController.listarAutor);
routes.post("/autor", AutorController.cadastrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutor);
routes.delete("/autor/:id", AutorController.deletarAutor);

export default routes;