import {DataTypes} from 'sequelize';
import  db from '../db/connection';

const Pais = db.define('Pais', {
    id:{
        type: DataTypes.INTEGER
    },

    continent_id: {
        type: DataTypes.INTEGER
    },
    name: {
        type:DataTypes.STRING
    }
});

export default Pais;
