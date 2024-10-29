import express from "express";
import connectaNaDataBase from "./config/dbConnect.js";

const conexao =  await connectaNaDataBase();

conexao.on('erro',(erro)=>{
 console.error("erro de conexao",erro);
});

conexao.once('open',() => {
 console.log("conexao com sucesso");
})

const app = express();
app.use(express.json());

const livros = [
 {id: 1, titulo :"Senhor dos aneis"},
 {id: 2, titulo :"O Hobbit"}
]

app.get("/",(req,res)=>{
 res.send(200,'Curso de Node.js');
});

app.get("/livros",(req,res)=>{
 res.status(200).json(livros);
});

app.get("/livros/:id",(req,res)=>{
 const index = buscaLivro(req.params.id);
 res.status(200).json(livros[index]);
});


function buscaLivro(id) {
 return livros.findIndex(livro => {
     return livro.id === Number(id);
 });
}

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