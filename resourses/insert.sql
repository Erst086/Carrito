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

USE carrito;

-- Insertar productos para Xbox
INSERT INTO productos (nombre, id_categoria, costo, precio, descripcion, stock, id_plataforma) VALUES
    ('Halo Infinite', 1, 40.00, 59.99, 'Juego de acción en primera persona', 100, 1),
    ('Forza Horizon 5', 1, 30.00, 49.99, 'Juego de carreras en mundo abierto', 80, 1),
    ('FIFA 22', 1, 30.00, 49.99, 'Juego de fútbol con licencias oficiales', 80, 1),
    ('NBA 2K22', 1, 30.00, 49.99, 'Juego de baloncesto', 65, 1),
    ('Call of Duty: Vanguard', 1, 40.00, 59.99, 'Juego de disparos en primera persona', 70, 1),
    ('Minecraft', 1, 10.00, 19.99, 'Juego de construcción en mundo abierto', 200, 1),
    ('Gears 5', 1, 25.00, 49.99, 'Juego de acción y disparos en tercera persona', 50, 1),
    ('Assassin´s Creed Valhalla', 1, 35.00, 59.99, 'Juego de acción y aventura en mundo abierto', 60, 1),
    ('DOOM Eternal', 1, 30.00, 59.99, 'Juego de disparos en primera persona', 40, 1),
    ('The Witcher 3: Wild Hunt', 1, 30.00, 49.99, 'Juego de rol de acción', 55, 1),
    ('Battlefield 2042', 1, 35.00, 59.99, 'Juego de disparos en primera persona', 60, 1),
    ('Watch Dogs: Legion', 1, 28.00, 49.99, 'Juego de acción y aventura en Londres', 75, 1),
    ('Far Cry 6', 1, 33.00, 59.99, 'Juego de acción en un mundo abierto', 50, 1),
    ('Red Dead Redemption 2', 1, 30.00, 59.99, 'Juego de acción y aventura en el Viejo Oeste', 65, 1),
    ('Madden NFL 22', 1, 30.00, 49.99, 'Juego de fútbol americano', 80, 1),
    ('Cyberpunk 2077', 1, 35.00, 59.99, 'Juego de rol y acción en un mundo futurista', 40, 1),
    ('Hitman 3', 1, 28.00, 49.99, 'Juego de sigilo y acción', 50, 1),
    ('Star Wars Jedi: Fallen Order', 1, 25.00, 49.99, 'Juego de acción y aventuras en el universo Star Wars', 70, 1),
    ('Apex Legends', 1, 28.30, 46.80, 'Juego de batalla real', 150, 1),
    ('Rage 2', 1, 20.00, 39.99, 'Juego de disparos en un mundo post-apocalíptico', 65, 1),
    ('Tomb Raider: Definitive Edition', 1, 25.00, 39.99, 'Juego de aventuras y acción', 100, 1),
    ('Borderlands 3', 1, 30.00, 59.99, 'Juego de disparos y rol', 60, 1),
    ('Dying Light 2', 1, 35.00, 59.99, 'Juego de supervivencia en un mundo apocalíptico', 50, 1),
    ('The Elder Scrolls V: Skyrim', 1, 20.00, 39.99, 'Juego de rol en un mundo abierto', 90, 1),
    ('F1 2021', 1, 30.00, 59.99, 'Juego de simulación de Fórmula 1', 75, 1),
    ('Tetris Effect', 1, 15.00, 29.99, 'Juego de puzzle y estrategia', 100, 1),
    ('Diablo III', 1, 20.00, 39.99, 'Juego de rol de acción', 50, 1),
    ('R6 Siege', 1, 20.00, 29.99, 'Juego táctico de disparos', 60, 1),
    ('GTA V', 1, 25.00, 49.99, 'Juego de acción y aventura en mundo abierto', 80, 1),
    ('Minecraft Dungeons', 1, 25.00, 39.99, 'Juego de rol y acción', 60, 1),
    ('Control', 1, 30.00, 59.99, 'Juego de acción y aventura', 75, 1),
-- Insertar productos para Nintendo
    ('Super Mario Odyssey', 1, 35.00, 59.99, 'Juego de plataformas de Mario', 70, 2),
    ('The Legend of Zelda: Breath of the Wild', 1, 35.00, 59.99, 'Aventura y exploración en un mundo abierto', 50, 2),
    ('Animal Crossing: New Horizons', 1, 30.00, 59.99, 'Simulación de vida en una isla', 90, 2),
    ('Mario Kart 8 Deluxe', 1, 30.00, 59.99, 'Juego de carreras de Mario', 100, 2),
    ('Splatoon 2', 1, 28.00, 49.99, 'Juego de disparos en tercera persona', 75, 2),
    ('Pokémon Sword', 1, 32.00, 59.99, 'Juego de aventuras y captura de Pokémon', 65, 2),
    ('Fire Emblem: Three Houses', 1, 35.00, 59.99, 'Juego de rol táctico', 60, 2),
    ('Super Smash Bros. Ultimate', 1, 40.00, 59.99, 'Juego de lucha con personajes de Nintendo', 50, 2),
    ('Xenoblade Chronicles 2', 1, 38.00, 59.99, 'Juego de rol y aventura', 45, 2),
    ('Luigi´s Mansion 3', 1, 28.00, 49.99, 'Juego de aventura y misterio con Luigi', 80, 2),
    ('Donkey Kong Country: Tropical Freeze', 1, 30.00, 49.99, 'Juego de plataformas de Donkey Kong', 70, 2),
    ('Super Mario Party', 1, 28.00, 49.99, 'Juego de fiesta y minijuegos', 100, 2),
    ('Bayonetta 2', 1, 30.00, 49.99, 'Juego de acción y hack-and-slash', 50, 2),
    ('Pokémon Shield', 1, 32.00, 59.99, 'Juego de aventuras y captura de Pokémon', 60, 2),
    ('Hyrule Warriors: Age of Calamity', 1, 35.00, 59.99, 'Juego de acción en el universo de Zelda', 45, 2),
    ('Kirby Star Allies', 1, 25.00, 49.99, 'Juego de plataformas de Kirby', 75, 2),
    ('Paper Mario: The Origami King', 1, 30.00, 59.99, 'Juego de rol y aventura de Mario', 60, 2),
    ('Luigi´s Mansion', 1, 20.00, 39.99, 'Juego de aventuras con Luigi en un mundo fantasmal', 100, 2),
    ('Octopath Traveler', 1, 38.00, 59.99, 'Juego de rol con estilo retro', 50, 2),
    ('Tetris 99', 1, 10.00, 19.99, 'Juego de puzzle en línea', 200, 2),
    ('The Legend of Zelda: Link´s Awakening', 1, 30.00, 49.99, 'Remake del clásico Zelda', 70, 2),
    ('Dragon Quest XI', 1, 30.00, 59.99, 'Juego de rol clásico de Dragon Quest', 50, 2),
    ('New Pokémon Snap', 1, 28.00, 49.99, 'Juego de fotografía en el mundo de Pokémon', 60, 2),
    ('Pikmin 3 Deluxe', 1, 35.00, 59.99, 'Juego de estrategia y aventura con Pikmin', 50, 2),
    ('Super Mario 3D All-Stars', 1, 38.00, 59.99, 'Colección de Mario 3D', 70, 2),
    ('Minecraft', 1, 20.00, 39.99, 'Juego de construcción y supervivencia en 3D', 100, 2),
    ('Bravely Default II', 1, 32.00, 59.99, 'Juego de rol clásico con estilo de batallas por turnos', 60, 2),
    ('Shin Megami Tensei V', 1, 38.00, 59.99, 'Juego de rol y batalla por turnos', 45, 2),
    ('Monster Hunter Rise', 1, 35.00, 59.99, 'Juego de acción y caza de monstruos', 50, 2),
    ('Super Mario 3D World + Bowser´s Fury', 1, 35.00, 59.99, 'Juego de plataformas y aventura', 80, 2),
-- Insertar accesorios para Xbox
    ('Xbox Wireless Controller', 2, 40.00, 59.99, 'Control inalámbrico para Xbox', 150, 1),
    ('Xbox Elite Wireless Controller Series 2', 2, 100.00, 179.99, 'Control inalámbrico premium para Xbox', 80, 1),
    ('Xbox Game Pass Ultimate', 2, 15.00, 29.99, 'Suscripción mensual para Xbox Game Pass Ultimate', 200, 1),
    ('Xbox Live Gold', 2, 10.00, 24.99, 'Suscripción mensual para Xbox Live Gold', 180, 1),
    ('Seagate 2TB Game Drive para Xbox', 2, 60.00, 109.99, 'Disco duro externo de 2TB para Xbox', 70, 1),
    ('Turtle Beach Stealth 700 Gen 2', 2, 80.00, 149.99, 'Auriculares inalámbricos para Xbox', 120, 1),
    ('Razer Wolverine V2', 2, 60.00, 99.99, 'Control para Xbox con botones adicionales', 90, 1),
    ('HyperX CloudX', 2, 50.00, 89.99, 'Auriculares con micrófono para Xbox', 100, 1),
    ('Xbox Adaptive Controller', 2, 90.00, 99.99, 'Control adaptativo para jugadores con movilidad limitada', 50, 1),
    ('Thrustmaster TMX Racing Wheel', 2, 150.00, 249.99, 'Volante para juegos de carreras en Xbox', 40, 1),
    ('PDP Afterglow Wireless Controller', 2, 35.00, 59.99, 'Control inalámbrico con luces para Xbox', 60, 1),
-- Insertar accesorios para Nintendo
    ('Nintendo Switch Pro Controller', 2, 60.00, 69.99, 'Control Pro para Nintendo Switch', 150, 2),
    ('Nintendo Switch Joy-Con (Par)', 2, 40.00, 79.99, 'Par de controles Joy-Con para Nintendo Switch', 200, 2),
    ('Nintendo Switch Online', 2, 3.00, 19.99, 'Suscripción mensual para Nintendo Switch Online', 300, 2),
    ('Hori Split Pad Pro', 2, 35.00, 49.99, 'Controles adicionales para Nintendo Switch', 120, 2),
    ('Nintendo Switch Dock Set', 2, 45.00, 89.99, 'Dock adicional para Nintendo Switch', 80, 2),
    ('Razer Kraken X for Nintendo Switch', 2, 30.00, 49.99, 'Auriculares con micrófono para Nintendo Switch', 100, 2),
    ('PDP Gaming Wired Controller', 2, 25.00, 39.99, 'Control con cable para Nintendo Switch', 90, 2),
    ('Hori Racing Wheel', 2, 60.00, 99.99, 'Volante para juegos de carreras en Nintendo Switch', 50, 2),
    ('PowerA Enhanced Wireless Controller', 2, 40.00, 69.99, 'Control inalámbrico para Nintendo Switch', 120, 2),
    ('Anker PowerCore 10000 Nintendo Switch Edition', 2, 25.00, 39.99, 'Batería externa para Nintendo Switch', 150, 2),
    ('Nintendo Labo Variety Kit', 2, 40.00, 69.99, 'Kit interactivo de cartón para Nintendo Switch', 60, 2),
    ('Skull & Co. GripCase', 2, 15.00, 24.99, 'Funda protectora con agarre para Nintendo Switch', 100, 2);

-- Insertar datos de pago
INSERT INTO datos_pago (id_usuario, numero_tarjeta, cvv, fecha_vencimiento, beneficiario) VALUES
    (1, '1234567812345678', '123', '2025-12-01', 'Juan Pérez'),
    (2, '2345678923456789', '456', '2026-11-15', 'María López'),
    (3, '3456789034567890', '789', '2027-10-10', 'Carlos Ruiz'),
    (4, '4567890145678901', '012', '2024-09-05', 'Laura Gómez');


