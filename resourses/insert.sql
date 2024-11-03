USE carrito;

-- Insertar roles
INSERT INTO roles (nombre, descripcion) VALUES 
    ('Administrador', 'Rol con permisos completos para gestionar el sistema'),
    ('Cliente', 'Usuario regular que realiza compras');

-- Insertar usuarios
INSERT INTO usuarios (nombre, ap_paterno, ap_materno, correo, contrasenia, id_rol) VALUES
    ('Juan', 'Pérez', 'García', 'juan.perez@example.com', 'password123', 1),
    ('María', 'López', 'Martínez', 'maria.lopez@example.com', 'password123', 1),
    ('Carlos', 'Ruiz', 'Hernández', 'carlos.ruiz@example.com', 'password123', 1),
    ('Laura', 'Gómez', 'Sánchez', 'laura.gomez@example.com', 'password123', 1),
    ('Ana', 'Jiménez', 'Cano', 'ana.jimenez@example.com', 'password123', 2),
    ('Luis', 'Martín', 'Blanco', 'luis.martin@example.com', 'password123', 2),
    ('Elena', 'Ortiz', 'Díaz', 'elena.ortiz@example.com', 'password123', 2),
    ('Pedro', 'Ramos', 'Serrano', 'pedro.ramos@example.com', 'password123', 2),
    ('Sara', 'Castro', 'Ramírez', 'sara.castro@example.com', 'password123', 2),
    ('Miguel', 'Vega', 'Romero', 'miguel.vega@example.com', 'password123', 2),
    ('Carla', 'Domínguez', 'Pardo', 'carla.dominguez@example.com', 'password123', 2),
    ('Fernando', 'Santos', 'Ortiz', 'fernando.santos@example.com', 'password123', 2),
    ('Inés', 'Moreno', 'Vidal', 'ines.moreno@example.com', 'password123', 2),
    ('Alberto', 'Delgado', 'Gil', 'alberto.delgado@example.com', 'password123', 2),
    ('Marta', 'Vázquez', 'Calvo', 'marta.vazquez@example.com', 'password123', 2),
    ('Raúl', 'Méndez', 'Peña', 'raul.mendez@example.com', 'password123', 2),
    ('Rosa', 'Herrera', 'Reyes', 'rosa.herrera@example.com', 'password123', 2),
    ('Diego', 'Iglesias', 'López', 'diego.iglesias@example.com', 'password123', 2),
    ('Beatriz', 'Flores', 'Martín', 'beatriz.flores@example.com', 'password123', 2),
    ('Cristina', 'Silva', 'Soto', 'cristina.silva@example.com', 'password123', 2);

-- Insertar categorías
INSERT INTO categorias (nombre, descripcion) VALUES
    ('Videojuegos', 'Juegos de diversas plataformas'),
    ('Accesorios', 'Accesorios y complementos para videojuegos'),
    ('Consolas', 'Diferentes tipos de consolas de videojuegos'),
    ('Controles', 'Controles para distintas consolas de videojuegos');

-- Insertar plataformas
INSERT INTO plataformas (nombre) VALUES
    ('Xbox'),
    ('Nintendo'),
    ('PSP');

-- Insertar productos
INSERT INTO productos (nombre, id_categoria, costo, precio, descripcion, stock, id_plataforma) VALUES
    ('Halo Infinite', 1, 40.00, 59.99, 'Juego de acción en primera persona', 100, 1),
    ('Forza Horizon 5', 1, 30.00, 49.99, 'Juego de carreras en mundo abierto', 80, 1),
    ('The Legend of Zelda: Breath of the Wild', 1, 35.00, 59.99, 'Aventura y exploración en un mundo abierto', 50, 2),
    ('Super Mario Odyssey', 1, 35.00, 59.99, 'Juego de plataformas de Mario', 70, 2),
    ('Animal Crossing: New Horizons', 1, 30.00, 59.99, 'Simulación de vida en una isla', 90, 2),
    ('Pokémon Sword', 1, 32.00, 59.99, 'Juego de aventuras y captura de Pokémon', 65, 2),
    ('God of War', 1, 25.00, 49.99, 'Juego de acción y aventura', 100, 3),
    ('The Last of Us', 1, 28.00, 49.99, 'Juego de acción y supervivencia', 50, 3),
    ('Final Fantasy VII Remake', 1, 33.00, 59.99, 'Remake del clásico juego de rol', 45, 3),
    ('Persona 5', 1, 25.00, 49.99, 'Juego de rol con estilo único', 60, 3),
    ('Headset para Xbox', 2, 20.00, 35.00, 'Auriculares para mejorar la experiencia de juego', 40, 1),
    ('Control inalámbrico para Xbox', 4, 25.00, 49.99, 'Control adicional para Xbox', 70, 1),
    ('Funda protectora para Nintendo Switch', 2, 5.00, 15.00, 'Funda de protección para la consola Nintendo', 100, 2),
    ('Tarjeta de memoria para PSP', 2, 10.00, 19.99, 'Memoria adicional para PSP', 60, 3),
    ('Mando DualShock', 4, 25.00, 59.99, 'Control de juego para PSP', 50, 3),
    ('Consola Xbox Series X', 3, 300.00, 499.99, 'Consola de última generación de Xbox', 20, 1),
    ('Consola Nintendo Switch', 3, 250.00, 399.99, 'Consola híbrida de Nintendo', 30, 2),
    ('Consola PSP', 3, 150.00, 299.99, 'Consola portátil de Sony', 25, 3),
    ('Dock para Nintendo Switch', 2, 15.00, 29.99, 'Dock para conectar la consola a la TV', 75, 2),
    ('FIFA 22', 1, 30.00, 49.99, 'Juego de fútbol con licencias oficiales', 80, 1),
    ('NBA 2K22', 1, 30.00, 49.99, 'Juego de baloncesto', 65, 1),
    ('Mortal Kombat 11', 1, 28.00, 49.99, 'Juego de lucha', 50, 3),
    ('Fortnite', 1, 0.00, 0.00, 'Juego de batalla en línea', 100, 1),
    ('GTA V', 1, 20.00, 29.99, 'Juego de acción y aventura en mundo abierto', 40, 3),
    ('Minecraft', 1, 10.00, 19.99, 'Juego de construcción en mundo abierto', 200, 2),
    ('Cuphead', 1, 15.00, 29.99, 'Juego de plataformas con estilo retro', 90, 1),
    ('Fall Guys', 1, 10.00, 19.99, 'Juego de plataformas y minijuegos', 80, 2),
    ('Resident Evil Village', 1, 25.00, 49.99, 'Juego de terror y supervivencia', 30, 3),
    ('Battlefield 2042', 1, 35.00, 59.99, 'Juego de disparos en primera persona', 50, 1),
    ('Rainbow Six Siege', 1, 20.00, 29.99, 'Juego táctico de disparos', 60, 1),
    ('Monster Hunter Rise', 1, 30.00, 59.99, 'Juego de caza de monstruos', 45, 2),
    ('Skyrim', 1, 20.00, 39.99, 'Juego de rol de mundo abierto', 70, 3),
    ('Ghost of Tsushima', 1, 30.00, 59.99, 'Juego de acción y aventura', 55, 3),
    ('Sonic Mania', 1, 10.00, 19.99, 'Juego de plataformas clásico de Sonic', 90, 2),
    ('Spyro Reignited Trilogy', 1, 20.00, 39.99, 'Juego de plataformas con Spyro', 50, 2),
    ('Crash Bandicoot N. Sane Trilogy', 1, 20.00, 39.99, 'Juego de plataformas con Crash Bandicoot', 75, 1),
    ('DOOM Eternal', 1, 30.00, 59.99, 'Juego de disparos y acción rápida', 60, 1),
    ('Control', 1, 25.00, 49.99, 'Juego de acción y ciencia ficción', 40, 3);

-- Insertar datos de pago
INSERT INTO datos_pago (id_usuario, numero_tarjeta, cvv, fecha_vencimiento, beneficiario) VALUES
    (1, '1234567812345678', '123', '2025-12-01', 'Juan Pérez'),
    (2, '2345678923456789', '456', '2026-11-15', 'María López'),
    (3, '3456789034567890', '789', '2027-10-10', 'Carlos Ruiz'),
    (4, '4567890145678901', '012', '2024-09-05', 'Laura Gómez');


