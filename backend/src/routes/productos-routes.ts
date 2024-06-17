import express from "express";
import { ObjectId } from "mongodb";
import client from "../db";

const productoRouter = express.Router();
const dbName = "test";

productoRouter.post("/producto", async (req, res) => {
    const producto = req.body;
    await client.connect();
    const db = client.db(dbName);
    const collection  = db.collection("productos");

    collection.insertOne(producto);
    res.status(200).send("POST success");

});

productoRouter.get("/productos", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection  = db.collection("productos");
  const productos = await collection.find({}).toArray();
  res.status(200).json(productos);
});

productoRouter.get("/producto/:id", async (req, res) => {
  const producto_id = req.params.id;
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("productos"); 
  const producto = await collection.findOne({"_id": new ObjectId(producto_id)});
  res.status(200).json(producto);
});

productoRouter.delete("/producto/:id", async (req, res) => {
  const producto_id = req.params.id;
  await client.connect();
  const db = client.db(dbName);
  const results = await db.collection("productos").deleteOne({ "_id": new ObjectId(producto_id)})
  res.status(200).send("Deleted");
});

productoRouter.put("/producto/:id", async (req, res) => {
  const producto_id = req.params.id; 
  const updated_producto = req.body;
  await client.connect();
  const db = client.db(dbName);
  const results = await db.collection("productos").updateOne({"_id": new ObjectId(producto_id)}, { $set: updated_producto });
  res.status(200).send("Modified");
});

productoRouter.get("/producto/:destacado?", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const results = await db.collection("productos").find({"destacado": true}).toArray();
  res.status(200).send(results);
})


export default productoRouter;