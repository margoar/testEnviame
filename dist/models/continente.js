"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Continente = connection_1.default.define('Continente', {
    id: {
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    anual_adjustment: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = Continente;
//# sourceMappingURL=continente.js.map