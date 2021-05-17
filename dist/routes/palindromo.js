"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const palindromo_1 = require("../controllers/palindromo");
const router = express_1.Router();
//definiendo nuestros endpoint
router.post('/', palindromo_1.obtenerPalindromas);
exports.default = router;
//# sourceMappingURL=palindromo.js.map