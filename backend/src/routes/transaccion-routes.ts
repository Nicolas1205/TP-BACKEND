import express from "express";
import { ObjectId, WithId } from "mongodb";
import client from "../db";

const transaccionRouter = express.Router();
const dbName = "test";
const collectionName = "transacciones";

transaccionRouter.post("/transaccion", async (req, res) => {
   const transaccion = req.body; 
   await client.connect();
   const db = client.db(dbName);
   const result = await db.collection("transaccion").insertOne(transaccion);
   res.status(200).send(result);
});

transaccionRouter.get("/transacciones", async (req, res) => {
    await client.connect()
    const transacciones = await client.db(dbName).collection("transaccion").find({}).toArray();
    res.status(200).send(transacciones);
});

transaccionRouter.get("/transaccion", async (req, res) => {
    const emailCliente = req.query.email;
    if(!emailCliente) {
        res.status(400).send("Bad Request: Wrong Params");
    }
    await client.connect();
    const transaccionesByEmail = await client.db(dbName).collection("transaccion").find({ "emailCliente": emailCliente}).toArray();
    res.status(200).send(transaccionesByEmail);
});

transaccionRouter.get("/transaccion/email", async (req, res) => {
    const source = req.query.source;
    const target = req.query.target;
    if(!source || !target){
        res.send("Bad Request").status(400);
    }
    const transaccionesBySourceAndTarget = await client.db(dbName).collection("transaccion").find({ monedaOrigen: source, monedaDestino: target}).toArray();
    res.send(transaccionesBySourceAndTarget).status(200);
});

export default transaccionRouter;