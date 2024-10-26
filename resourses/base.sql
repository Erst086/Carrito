SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS carrito;
CREATE DATABASE IF NOT EXISTS carrito DEFAULT CHARACTER SET UTF8MB4;
USE carrito;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE IF NOT EXISTS usuarios(
    id_usuario					INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    correo  					VARCHAR(50) NOT NULL,
    fecha_registro				DATETIME DEFAULT NOW(), 
    ultimo_acceso				DATETIME, 
    PRIMARY KEY(id_usuario)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS plataformas;
CREATE TABLE IF NOT EXISTS plataformas(
    id_plataforma				INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    imagen                      LONGBLOB,
    PRIMARY KEY(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS juegos;
CREATE TABLE IF NOT EXISTS juegos(
    id_juego					INTEGER NOT NULL AUTO_INCREMENT,
    nombre						VARCHAR(50) NOT NULL,
    id_plataforma  				INTEGER,
    precio                      DECIMAL(10, 2),
    descripcion                 TEXT,
    imagen                      LONGBLOB,
    stock                       INTEGER,
    PRIMARY KEY(id_juego),
    FOREIGN KEY(id_plataforma) REFERENCES plataformas(id_plataforma)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS ventas;
CREATE TABLE IF NOT EXISTS ventas(
    id_venta					INTEGER NOT NULL AUTO_INCREMENT,
    id_usuario  				INTEGER,
    fecha_venta                 DATETIME DEFAULT NOW(),
    total_venta                 DECIMAL(10, 2),
    PRIMARY KEY(id_venta),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
)DEFAULT CHARACTER SET UTF8MB4;

DROP TABLE IF EXISTS juegos_ventas;
CREATE TABLE IF NOT EXISTS juegos_ventas(
    id_jv   					INTEGER NOT NULL AUTO_INCREMENT,
    id_venta      				INTEGER,
    id_juego      				INTEGER,
    cantidad                    INTEGER,
    precio_unidad               DECIMAL(10, 2),
    subtotal                    DECIMAL(10, 2),
    PRIMARY KEY(id_jv),
    FOREIGN KEY(id_venta) REFERENCES ventas(id_venta),
    FOREIGN KEY(id_juego) REFERENCES juegos(id_juego)
)DEFAULT CHARACTER SET UTF8MB4;

/*
    INSERT INTO plataformas(nombre,imagen) values ('Nintendo', LOAD_FILE('ruta'));
    INSERT INTO plataformas(nombre,imagen) values ('PlayStation', LOAD_FILE('ruta'));
    INSERT INTO plataformas(nombre,imagen) values ('XBox', LOAD_FILE('ruta'));
*/
