import {DataTypes } from 'sequelize';
import  db from '../db/connection';

const Empleado = db.define('Employees', {

    country_id: {
        type: DataTypes.INTEGER
    },
    first_name: {
        type:DataTypes.STRING
    },
    last_name: {
        type:DataTypes.STRING
    },
    salary: {
        type:DataTypes.INTEGER
    }
});

export default Empleado;
