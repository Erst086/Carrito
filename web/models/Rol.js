import Sequelize from "sequelize";
import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Rol = db.define('roles', {
    id_rol: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    timestamps: false,
});

export default Rol;