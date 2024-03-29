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
exports.generaEmpresasFake = exports.eliminarEmpresa = exports.actualizarEmpresa = exports.obtenerEmpresa = exports.listarEmpresas = exports.crearEmpresa = void 0;
const empresa_1 = __importDefault(require("../models/empresa"));
const faker_1 = __importDefault(require("faker"));
const rut_utilities_1 = require("@fdograph/rut-utilities");
const crearEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //validar el rut
        console.log(body.rut);
        if (!rut_utilities_1.validateRut(body.rut)) {
            return res.status(400).json({
                msg: `rut invalido`
            });
        }
        //Validamos existencia previa empresa para evitar registros duplicados.
        const existeEmpresa = yield empresa_1.default.findOne({
            where: {
                rut: body.rut.replace('.', '').replace('-', '')
            }
        });
        if (existeEmpresa) {
            return res.status(400).json({
                msg: `Ya existe una empersa con el rut ${body.rut}`
            });
        }
        const empresa = yield empresa_1.default.create(body);
        res.json(empresa);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });
    }
});
exports.crearEmpresa = crearEmpresa;
const listarEmpresas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empresas = yield empresa_1.default.findAll({
        //trae empresas activas
        where: {
            estado: 1
        }
    });
    res.json(empresas);
});
exports.listarEmpresas = listarEmpresas;
const obtenerEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empresa = yield empresa_1.default.findByPk(id);
    if (empresa) {
        res.json(empresa);
    }
    else {
        res.status(404).json({ msg: `No existe una empresa con el id ${id}` });
    }
});
exports.obtenerEmpresa = obtenerEmpresa;
const actualizarEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const empresa = yield empresa_1.default.findByPk(id);
        if (!empresa) {
            return res.status(404).json({
                msg: `No existe una empresa con el id ${id}`
            });
        }
        yield empresa.update(body);
        res.json(empresa);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });
    }
});
exports.actualizarEmpresa = actualizarEmpresa;
const eliminarEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empresa = yield empresa_1.default.findByPk(id);
    if (!empresa) {
        return res.status(404).json({
            msg: `No existe una empresa con el id ${id}`
        });
    }
    //Eliminacion fisica
    yield empresa.destroy();
    res.status(200).json({
        msg: `la empresa con el id ${id} se ha eliminado correctamente`
    });
});
exports.eliminarEmpresa = eliminarEmpresa;
const generaEmpresasFake = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isFake } = req.params;
    try {
        let empresasFake = [];
        if (isFake) {
            for (let i = 0; i <= 10; i++) {
                let empresaFake = {
                    nombreFantasia: faker_1.default.company.companyName(),
                    razonSocial: faker_1.default.company.companyName() + ' ' + faker_1.default.company.companySuffix(),
                    rut: rut_utilities_1.generateRut().replace('-', ''),
                    direccion: faker_1.default.address.streetAddress(),
                    estado: 1
                };
                empresasFake.push(empresaFake);
            }
            yield empresa_1.default.bulkCreate(empresasFake);
            res.json(empresasFake);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });
    }
});
exports.generaEmpresasFake = generaEmpresasFake;
//# sourceMappingURL=empresa.js.map