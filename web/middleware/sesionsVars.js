const sessionMiddleware = (req, res, next) => {
    // Agregar variables de sesión a `res.locals` para que estén disponibles en todas las vistas
    res.locals.usuario = req.session.usuario || null;

    next(); // Continuar con el siguiente middleware o ruta
};

export default sessionMiddleware;
