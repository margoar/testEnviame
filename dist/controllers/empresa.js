"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpresa = exports.actualizarEmpresa = exports.obtenerEmpresa = exports.listarEmpresas = exports.crearEmpresa = void 0;
const empresa_1 = __importDefault(require("../models/empresa"));
const crearEmpresa = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Crear empresa',
        body
    });
};
exports.crearEmpresa = crearEmpresa;
const listarEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresa = yield empresa_1.default.findAll();
    res.json(empresa);
});
exports.listarEmpresas = listarEmpresas;
const obtenerEmpresa = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'obtener empresa por id',
        id
    });
};
exports.obtenerEmpresa = obtenerEmpresa;
const actualizarEmpresa = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'actualizando empresa',
        body,
        id
    });
};
exports.actualizarEmpresa = actualizarEmpresa;
const eliminarEmpresa = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'eliminando empresa por id',
        id
    });
};
exports.eliminarEmpresa = eliminarEmpresa;
//# sourceMappingURL=empresa.js.map