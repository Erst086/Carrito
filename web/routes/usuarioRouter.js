import express from 'express';
import Usuario from '../models/Usuario.js';
import Rol from '../models/Rol.js';

const router = express.Router();

// Ruta para obtener todos los usuarios y renderizar la vista
router.get('/usuarios', async (req, res) => {
  try {
    // Obtener los usuarios con sus roles
    const usuarios = await Usuario.findAll({
      include: {
        model: Rol,
        attributes: ['nombre'],  // Ajusta los campos del modelo Rol
      },
    });

    // Renderiza la vista 'user/usuarios' pasando los usuarios
    res.render('user/usuarios', { usuarios });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error al obtener los usuarios');
  }
});

export default router;
