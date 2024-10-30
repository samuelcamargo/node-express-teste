import ErroBase from "./ErroBase.js";

class NaoEncotrado extends ErroBase{
  constructor(){
    super("pagina não encontrara",404);
  }
}

export default NaoEncotrado;