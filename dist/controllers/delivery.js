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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiempoEntrega = exports.crearDelivery = void 0;
const crearDelivery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            msg: `creando envio`
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });
    }
});
exports.crearDelivery = crearDelivery;
const tiempoEntrega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //recibe distancia 
    const { body } = req;
    let distancia = body.distancia;
    let rango = Math.floor(distancia / 100);
    console.log("rango " + rango);
    try {
        var tiempoEnvio = 0;
        if (distancia >= 100 && distancia < 300) {
            tiempoEnvio = 1;
        }
        else if (distancia >= 300 && distancia < 400) {
            tiempoEnvio = 2;
        }
        else if (distancia >= 400 && distancia < 500) {
            tiempoEnvio = 3;
        }
        else if (distancia >= 500) {
            tiempoEnvio = (rango - 1) + (rango - 2);
        }
        let resp = tiempoEnvio > 0 ? `Su compra llegara en  ${tiempoEnvio} dias` : `Su compra llegara hoy`;
        res.status(200).json({
            msg: resp
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });
    }
});
exports.tiempoEntrega = tiempoEntrega;
//# sourceMappingURL=delivery.js.map