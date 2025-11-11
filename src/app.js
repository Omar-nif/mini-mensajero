//src/app.js
import express from "express"; // framework
import cors from "cors"; // para permitir conexiones desde otras url
import path from "path";
import { fileURLToPath } from "url"; 
import messageRoutes from "./routes/messages.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware 
app.use(cors());  // Sin CORS, el navegador bloquea la petición.
// entornos reales puede usarse:
// app.use(cors({ origin: "https://mipagina.com" }));
app.use(express.json());
// Convertir automáticamente el cuerpo (body) de las peticiones HTTP que vienen en formato JSON en un objeto JavaScript.

//configurar carpeta publica
const __filname = fileURLToPath(import.meta.url);
// fileURLToPath() → convierte esa URL en una ruta real de sistema (C:\proyecto\src\app.js). 
// import.meta.url → devuelve la URL del archivo actual 
const __dirname = path.dirname(__filname);
// path.dirname() → toma la ruta del archivo y devuelve solo la carpeta que lo contiene (C:\proyecto\src).
app.use(express.static(path.join(__dirname, "../public"))); 

//Rutas de la API
app.use("/api/messages", messageRoutes);

//Iniciamos servidor
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})