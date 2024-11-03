import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Plataforma = db.define('plataformas', {
    id_plataforma: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.BLOB("long"),
    },
}, {
    timestamps: false,
});

export default Plataforma;