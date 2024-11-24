import Usuarios from '../models/Usuario.js';

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll();  // Obtiene todos los usuarios de la base de datos
        return res.render('usuarios/lista', { usuarios });  // Renderiza la vista con los usuarios
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};
