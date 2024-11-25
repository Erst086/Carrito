const verificarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        const usuario = res.locals.usuario;
        if (!usuario) {
            return res.redirect('/'); // Si no hay usuario autenticado
        }

        const { rol } = usuario; // Extraer el rol del usuario
        if (!rolesPermitidos.includes(rol)) {
            return res.status(403).send('No tienes permisos para acceder a esta página');
        }

        next(); // El usuario tiene uno de los roles permitidos
    };
};

export default verificarRol;