"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresa_1 = require("../controllers/empresa");
const router = express_1.Router();
//definiendo nuestros endpoint
router.post('/', empresa_1.crearEmpresa);
router.get('/', empresa_1.listarEmpresas);
router.get('/:id', empresa_1.obtenerEmpresa);
router.put('/:id', empresa_1.actualizarEmpresa);
router.delete('/:id', empresa_1.eliminarEmpresa);
exports.default = router;
//# sourceMappingURL=empresa.js.map