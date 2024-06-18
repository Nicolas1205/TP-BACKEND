import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

// Routes
import productoRouter from "./routes/productos-routes"; 
import transaccionRouter from "./routes/transaccion-routes";

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(productoRouter, transaccionRouter);

app.listen(port, () => {
  console.log(`${port}`);
});