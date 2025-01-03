import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const mongoURI = process.env.URI_MONGODB;
const cliente = new MongoClient(mongoURI);

let documentosColecao;

try {
    await cliente.connect();
    const db = cliente.db('alura-websockets');
    documentosColecao = db.collection('documentos');

    console.log('Conectado ao banco de dados com sucesso!');
} catch (erro) {
    console.log(erro);
}

export { documentosColecao };