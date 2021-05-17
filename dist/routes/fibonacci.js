"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fibonacci_1 = require("../controllers/fibonacci");
const router = express_1.Router();
//definiendo nuestros endpoint
router.post('/', fibonacci_1.obtenerFibonacci);
exports.default = router;
//# sourceMappingURL=fibonacci.js.map