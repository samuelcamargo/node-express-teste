import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro) {
    const mensagemErro = erro.erros
      ? Object.values(erro.erros).map(err => err.message).join("; ") : "Erro de validação desconhecido.";
    super(`Houve um erro de validação de dados. ${mensagemErro}`);
  }
}

export default ErroValidacao;
