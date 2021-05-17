import {DataTypes} from 'sequelize';
import  db from '../db/connection';

const Delivery = db.define('Delivery', {

    data: {
        type: DataTypes.JSON
    }
   
});

export default Delivery;
