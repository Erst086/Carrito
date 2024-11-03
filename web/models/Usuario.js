import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Rol from './Rol.js';

const Usuario = db.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ap_paterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ap_materno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ultimo_acceso: {
        type: DataTypes.DATE,
    },
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: Rol,
            key: 'id_rol',
        },
    },
}, {
    timestamps: false,
});

Rol.hasMany(Usuario, { foreignKey: 'id_rol' });
Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

export default Usuario;