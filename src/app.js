import express from "express";
import connectaNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middleware/manipuladorDeErros.js";

const conexao =  await connectaNaDataBase();

conexao.on('erro',(erro)=>{
  console.error("erro de conexao",erro);
});

conexao.once('open',() => {
  console.log("conexao com sucesso");
})

const app = express();
routes(app); // instancia das rotas

app.use(manipuladorDeErros);

export default app;