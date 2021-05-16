import {Sequelize} from 'sequelize';




const db = new Sequelize('enviametest', 'root','1234',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: true,
        freezeTableName: true
      }
   
    //logging:false
} );

export default db;
