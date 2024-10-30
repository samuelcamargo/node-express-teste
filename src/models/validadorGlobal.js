import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor != null && valor !== "",
  message: "Campo em branco"
});