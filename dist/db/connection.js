"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('enviametest', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true,
        freezeTableName: true
    }
    //logging:false
});
exports.default = db;
//# sourceMappingURL=connection.js.map