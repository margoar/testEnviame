import {DataTypes} from 'sequelize';
import  db from '../db/connection';

const Continente = db.define('Continente', {
    id:{
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    anual_adjustment: {
        type:DataTypes.INTEGER
    }
});

export default Continente;
