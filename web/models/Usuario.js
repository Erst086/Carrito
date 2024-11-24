import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../config/db.js';
import Roles from './Rol.js';

const Usuarios = db.define('usuarios', {
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
    confirmar:DataTypes.BOOLEAN,
    token:DataTypes.STRING,
    id_rol: {
        type: DataTypes.INTEGER,
        references: {
            model: Roles,
            key: 'id_rol',
        },
    },
}, {
    timestamps: false,
    hooks:{
        beforeCreate: async function (usuario) {
            const rep = await bcrypt.genSalt(10);
            usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, rep);
        }
    },
    scopes:{
        elimiarClave:{
            attributes:{
                exclude:['token','contrasenia','confirmar','id_rol']
            }
        }
    }
});
Roles.hasOne(Usuarios, { foreignKey: 'id_rol' });
Usuarios.belongsTo(Roles, { foreignKey: 'id_rol' });
//metodo prototype
Usuarios.prototype.verificandoClave=function(password){
    return bcrypt.compareSync(password,this.contrasenia);
}
export default Usuarios;