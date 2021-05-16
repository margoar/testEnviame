"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empleado_1 = require("../controllers/empleado");
const router = express_1.Router();
//definiendo nuestros endpoint
router.post('/', empleado_1.realizarReajuste);
exports.default = router;
//# sourceMappingURL=empleado.js.map