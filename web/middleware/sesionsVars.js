const sessionMiddleware = (req, res, next) => {
    // Agregar variables de sesión a `res.locals` para que estén disponibles en todas las vistas
    res.locals.usuario = req.session.usuario || null;
    const usuario = res.locals.usuario;
    if (usuario){
        res.locals.userLoggedIn = true;
    }else{
        res.locals.userLoggedIn = false;
    }
    next(); // Continuar con el siguiente middleware o ruta
};

export default sessionMiddleware;
