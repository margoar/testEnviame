"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Empleado = connection_1.default.define('Employees', {
    country_id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING
    },
    salary: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Empleado;
//# sourceMappingURL=empleado.js.map