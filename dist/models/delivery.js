"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Delivery = connection_1.default.define('Delivery', {
    data: {
        type: sequelize_1.DataTypes.JSON
    }
});
exports.default = Delivery;
//# sourceMappingURL=delivery.js.map