import Usuario from "../models/Usuario.js";
import Producto from "../models/Producto.js"; // Modelo para productos
import { check, validationResult } from "express-validator";
import { Op } from "sequelize";
const inicio = (req, res) => {
    res.render("inicio", {
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

const videojuegos = async (req, res) => {
    try {
        // Recuperar videojuegos de la base de datos
        const productos = await Producto.findAll({
            where: {
                id_plataforma: 1, // Filtrar por categoría si es necesario
                id_categoria: 1,
            },
        });
        console.log(productos)
        res.render("layout/bVideojuegos", {
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
        // Recuperar consolas de la base de datos
        const consolas = await Producto.findAll({
            where: {
                id_categoria: {
                    [Op.in]: [2, 3, 4], // Lista de categorías permitidas
                },
            },
        });

        res.render("layout/bConsolas", {
            pagina: "Inicio consolas",
            consolas, // Pasar los datos a la vista
        });
    } catch (error) {
        console.error("Error al recuperar consolas:", error);
        res.status(500).send("Error interno del servidor");
    }
};

export { videojuegos, con, log, sing, inicio };
