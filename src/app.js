import express from "express";
import connectaNaDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao =  await connectaNaDataBase();

conexao.on('erro',(erro)=>{
 console.error("erro de conexao",erro);
});

conexao.once('open',() => {
 console.log("conexao com sucesso");
})

const app = express();
app.use(express.json());


app.get("/",(req,res)=>{
 res.send(200,'Curso de Node.js');
});

app.get("/livros", async (req,res)=>{
 const listaLivros = await livro.find({});
 res.status(200).json(listaLivros);
});

app.get("/livros/:id",(req,res)=>{
 const index = buscaLivro(req.params.id);
 res.status(200).json(livros[index]);
});

app.post("/livros",(req,res)=>{
 livros.push(req.body);
 res.status(201).send("livros Cadastrado com sucesso!");
});

app.put("/livros/:id",(req,res)=>{
 const index = buscaLivro(req.params.id);
 livros[index].titulo = req.body.titulo;
 res.status(201).json(livros);
});

app.delete("/livros/:id",(req,res)=>{
 const index = buscaLivro(req.params.id);
 livros.splice(index,1);
 res.status(200).send("livros deletado com sucesso!");
});

export default app;