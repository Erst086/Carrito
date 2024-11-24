import Sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Roles = db.define('roles', {
    id_rol: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
}, {
    timestamps: false,
});

export default Roles;
