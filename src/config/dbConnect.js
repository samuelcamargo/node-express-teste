import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis do .env


async function connectaNaDataBase(params) {
 mongoose.connect(process.env.MONGODB_URI);
 return mongoose.connection;
}

export default connectaNaDataBase;