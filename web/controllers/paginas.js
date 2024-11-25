import Productos from "../models/Producto.js"; // Modelo para productos
import { check, validationResult } from "express-validator";
import { Op } from "sequelize";
const inicio = (req, res) => {
    res.render("inicio", {
        pagina: "Bienvenido",
    });
}
const getDatos = async (req, res) => {
    try {
        const { tipo } = req.params; // Obtener el tipo de consulta desde la URL
        let config = {};

        // Configuración según el tipo
        switch (tipo) {
            case "play":
                config = {
                    id_plataforma: 3,
                    id_categoria: 1,
                    vista: "consolas/bPlay",
                    pagina: "Inicio videojuegos - PlayStation",
                };
                break;

            case "nin":
                config = {
                    id_plataforma: 2,
                    id_categoria: 1,
                    vista: "consolas/bNin",
                    pagina: "Inicio videojuegos - Nintendo",
                };
                break;

            case "xbox":
                config = {
                    id_plataforma: 1,
                    id_categoria: 1,
                    vista: "consolas/bXbox",
                    pagina: "Inicio videojuegos - Xbox",
                };
                break;

            case "inicio":
                const produc = await Productos.findAll({
                    limit: 12, // Obtener solo 12 productos
                });
                return res.render("user/inicioUser", { produc });

            case "con":
                const consolas = await Productos.findAll({
                    where: {
                        id_categoria: {
                            [Op.in]: [2, 4], // Categorías para consolas
                        },
                    },
                });

                // Filtrar consolas por plataforma
                const playstation = consolas.filter(
                    consola => consola.id_plataforma === 3
                );
                const xbox = consolas.filter(
                    consola => consola.id_plataforma === 1
                );
                const nintendo = consolas.filter(
                    consola => consola.id_plataforma === 2
                );

                return res.render("consolas/bConsolas", {
                    pagina: "Inicio consolas",
                    playstation,
                    xbox,
                    nintendo,
                });

            default:
                return res.status(404).send("Ruta no encontrada");
        }

        // Recuperar datos según la configuración para videojuegos
        const productos = await Productos.findAll({
            where: {
                id_plataforma: config.id_plataforma,
                id_categoria: config.id_categoria,
            },
        });

        // Renderizar la vista configurada
        res.render(config.vista, {
            pagina: config.pagina,
            productos,
        });
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).send("Error interno del servidor");
    }
};

export { getDatos, inicio};
