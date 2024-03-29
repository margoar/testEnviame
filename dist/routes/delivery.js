"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delivery_1 = require("../controllers/delivery");
const router = express_1.Router();
//definiendo nuestros endpoint
router.post('/', delivery_1.crearDelivery);
router.get('/', delivery_1.tiempoEntrega);
exports.default = router;
//# sourceMappingURL=delivery.js.map