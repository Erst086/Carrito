import Usuarios from "../models/Usuario.js";
import Productos from "../models/Producto.js"; // Modelo para productos
import { check, validationResult } from "express-validator";
import { Op } from "sequelize";
const inicio = (req, res) => {
    res.render("inicio", {
        pagina: "Bienvenido",
    });
};

const admin = (req, res) => {
    res.render("admin/bAdmin", {
        pagina: "Bienvenido",
    });
};

const log = (req, res) => {
    res.render("credenciales/login", {
        pagina: "Inicio xbox",
    });
};

const sing = (req, res) => {
    res.render("credenciales/signin", {
        pagina: "Inicio xbox",
    });
};

const play = async (req, res) => {
    try {
        // Recuperar videojuegos de la base de datos
        const productos = await Productos.findAll({
            where: {
                id_plataforma: 3, // Filtrar por categoría si es necesario
                id_categoria: 1,
            },
        });
        res.render("layout/bPlay", {
            pagina: "Inicio videojuegos",
            productos, // Pasar los datos a la vista
        });
    } catch (error) {
        console.error("Error al recuperar videojuegos:", error);
        res.status(500).send("Error interno del servidor");
    }
};

const nin = async (req, res) => {
    try {
        // Recuperar videojuegos de la base de datos
        const productos = await Productos.findAll({
            where: {
                id_plataforma: 2, // Filtrar por categoría si es necesario
                id_categoria: 1,
            },
        });
        res.render("layout/bNin", {
            pagina: "Inicio videojuegos",
            productos, // Pasar los datos a la vista
        });
    } catch (error) {
        console.error("Error al recuperar videojuegos:", error);
        res.status(500).send("Error interno del servidor");
    }
};

const xbox = async (req, res) => {
    try {
        // Recuperar videojuegos de la base de datos
        const productos = await Productos.findAll({
            where: {
                id_plataforma: 1, // Filtrar por categoría si es necesario
                id_categoria: 1,
            },
        });
        res.render("layout/bXbox", {
            pagina: "Inicio videojuegos",
            productos, // Pasar los datos a la vista
        });
    } catch (error) {
        console.error("Error al recuperar videojuegos:", error);
        res.status(500).send("Error interno del servidor");
    }
};
const con = async (req, res) => {
    try {
        const consolas = await Productos.findAll({
            where: {
                id_categoria: {
                    [Op.in]: [2, 4], 
                },
            },
        });

        // Filtrar consolas por categoría y plataforma
        const playstation = consolas.filter(
            consola => consola.id_plataforma === 3
        );
        const xbox = consolas.filter(
            consola => consola.id_plataforma === 1
        );
        const nintendo = consolas.filter(
            consola => consola.id_plataforma === 2
        );

        // Renderizar la vista con las consolas separadas
        res.render("layout/bConsolas", {
            pagina: "Inicio consolas",
            playstation,
            xbox,
            nintendo,
        });
    } catch (error) {
        console.error("Error al recuperar consolas:", error);
        res.status(500).send("Error interno del servidor");
    }
};
export { play, xbox, nin , con, log, sing, inicio , admin};
