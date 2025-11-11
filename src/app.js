//src/app.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; //import.meta.url → devuelve la URL del archivo actual (file:///C:/proyecto/src/app.js).

import messageRoutes from "./routes/messages.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware 
app.use(cors());
app.use(express.json());

//configurar carpeta publica
const __filname = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filname);
app.use(express.static(path.join(__dirname, "../public")));

//Rutas de la API
app.use("/api/messages", messageRoutes);

//Iniciamos servidor
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})