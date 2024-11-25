import Productos from "../models/Producto.js"; // Modelo para productos
import { check, validationResult } from "express-validator";
import { Op } from "sequelize";
const inicio = (req, res) => {
    res.render("inicio", {
        pagina: "Bienvenido",
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
        res.render("consolas/bPlay", {
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
        res.render("consolas/bNin", {
            pagina: "Inicio videojuegos",
            productos, // Pasar los datos a la vista
        });
    } catch (error) {
        console.error("Error al recuperar videojuegos:", error);
        res.status(500).send("Error interno del servidor");
    }
};

const muestra = async (req, res) => {
    try {
        // Obtener solo 4 productos de la base de datos
        const produc = await Productos.findAll({
            limit: 12, // Limita a 4 productos
        });

        // Renderizar la vista y pasar los productos
        res.render('user/inicioUser', { produc });
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un error al obtener los productos");
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
        res.render("consolas/bXbox", {
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
        res.render("consolas/bConsolas", {
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
const pago = (req, res) => {
    res.render("pago/metodo", {
        pagina: "Bienvenido",
    });
};
export { play, xbox, nin, con, inicio, muestra,pago};
