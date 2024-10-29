import mongoose from "mongoose"

async function connectaNaDataBase(params) {
 mongoose.connect(process.env.MONGODB_URI);
 return mongoose.connection;
}

export default connectaNaDataBase;