SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS carrito;
CREATE DATABASE IF NOT EXISTS carrito DEFAULT CHARACTER SET UTF8MB4;
USE carrito;

CREATE TABLE IF NOT EXISTS roles(
    id_rol                    INT NOT NULL AUTO_INCREMENT,
    nombre                    VARCHAR(50) NOT NULL,
    descripcion               TEXT,
    PRIMARY KEY(id_rol)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS usuarios(
    id_usuario                INT NOT NULL AUTO_INCREMENT,
    nombre                    VARCHAR(100) NOT NULL,
    ap_paterno                VARCHAR(80) NOT NULL,
    ap_materno                VARCHAR(80) NOT NULL,
    correo                    VARCHAR(250) UNIQUE NOT NULL,
    contrasenia               VARCHAR(250) NOT NULL,
    fecha_registro            DATETIME DEFAULT NOW(),
    ultimo_acceso             DATETIME,
    confirmar				  tinyint(1) DEFAULT 0,
    token					  VARCHAR(50),
    id_rol                    INT NOT NULL,
    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS datos_pagos(
    id_datopago               INT NOT NULL AUTO_INCREMENT,
    id_usuario                INT NOT NULL,
    numero_tarjeta            VARCHAR(16) NOT NULL,
    cvv                       VARCHAR(3) NOT NULL,
    fecha_vencimiento         DATE NOT NULL,
    beneficiario              VARCHAR(250) NOT NULL,
    PRIMARY KEY(id_datopago),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS ventas(
    id_venta                  INT NOT NULL AUTO_INCREMENT,
    id_usuario                INT,
    id_datopago               INT,
    fecha_venta               DATETIME DEFAULT NOW(),
    total_venta               DECIMAL(10, 2),
    PRIMARY KEY(id_venta),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_datopago) REFERENCES datos_pagos(id_datopago)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS categorias(
    id_categoria              INT NOT NULL AUTO_INCREMENT,
    nombre                    VARCHAR(50) NOT NULL,
    descripcion               TEXT,
    PRIMARY KEY(id_categoria)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS plataformas(
    id_plataforma             INT NOT NULL AUTO_INCREMENT,
    nombre                    VARCHAR(50) NOT NULL,
    imagen                    LONGBLOB,
    PRIMARY KEY(id_plataforma)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS productos(
    id_producto               INT NOT NULL AUTO_INCREMENT,
    nombre                    VARCHAR(50) NOT NULL,
    id_categoria              INT,
    costo                     DECIMAL(10, 2),
    precio                    DECIMAL(10, 2),
    descripcion               TEXT,
    imagen                    LONGBLOB,
    stock                     INT,
    id_plataforma             INT,
    PRIMARY KEY(id_producto),
    FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria),
    FOREIGN KEY(id_plataforma) REFERENCES plataformas(id_plataforma)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE IF NOT EXISTS productos_ventas(
    id_productventa           INT NOT NULL AUTO_INCREMENT,
    id_venta                  INT,
    id_producto               INT,
    cantidad                  INT,
    precio_unidad             DECIMAL(10, 2),
    subtotal                  DECIMAL(10, 2),
    PRIMARY KEY(id_productventa),
    FOREIGN KEY(id_venta) REFERENCES ventas(id_venta),
    FOREIGN KEY(id_producto) REFERENCES productos(id_producto)
) DEFAULT CHARACTER SET UTF8MB4;
