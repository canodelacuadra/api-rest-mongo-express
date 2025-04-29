import express from "express";
import cors from "cors";
// https://expressjs.com/en/resources/middleware/cors.html

import dotenv from "dotenv";
import { conectarDB } from "./config/database.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import peliculasRoutes from "./routes/peliculas.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

conectarDB();
// Creamos una ruta de bienvenida
app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Bienvenido a nuestra API RES de peliculas",
        "nodos": {
            "/peliculas": "Listado de peliculas",
            "/usuarios": "Listado de usuarios sólo accesible a usuarios registrados"
        }
    })
})
// las rutas las cargamos
app.use("/usuarios", usuariosRoutes);
app.use("/peliculas", peliculasRoutes);

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));