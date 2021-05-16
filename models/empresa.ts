import {DataTypes} from 'sequelize';
import  db from '../db/connection';

const Empresa = db.define('Empresa', {

    nombreFantasia: {
        type: DataTypes.STRING
    },
    razonSocial: {
        type:DataTypes.STRING
    },
    rut : {
        type: DataTypes.STRING
    }, 
    direccion: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.TINYINT
    },
    updatedAt:{
        type:DataTypes.DATE
    }
   
});

export default Empresa;
