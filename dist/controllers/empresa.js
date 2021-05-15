"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpresa = exports.actualizarEmpresa = exports.obtenerEmpresa = exports.listarEmpresas = exports.crearEmpresa = void 0;
const crearEmpresa = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Crear empresa',
        body
    });
};
exports.crearEmpresa = crearEmpresa;
const listarEmpresas = (req, res) => {
    res.json({
        msg: 'Listando Empresas...'
    });
};
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