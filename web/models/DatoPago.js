import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Usuarios from './Usuario.js';

const DatosPago = db.define('datos_pago', {
    id_datopago: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuarios,
            key: 'id_usuario',
        },
    },
    numero_tarjeta: {
        type: DataTypes.STRING(16),
        allowNull: false,
    },
    cvv: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    beneficiario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

Usuarios.hasMany(DatosPago, { foreignKey: 'id_usuario' });
DatosPago.belongsTo(Usuario, { foreignKey: 'id_usuario' });

export default DatosPago;