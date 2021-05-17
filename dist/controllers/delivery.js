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
exports.tiempoEntrega = exports.crearDelivery = void 0;
const axios_1 = __importDefault(require("axios"));
const delivery_1 = __importDefault(require("../models/delivery"));
const crearDelivery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Consumiendo Api...');
        const envio = yield axios_1.default({
            method: 'POST',
            url: 'https://stage.api.enviame.io/api/s2/v2/companies/401/deliveries',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": "ea670047974b650bbcba5dd759baf1ed"
            },
            data: {
                "shipping_order": {
                    "n_packages": "10",
                    "content_description": "ORDEN 255826267",
                    "imported_id ": "255826267",
                    "order_price": "24509.0",
                    "weight": "0.98",
                    "volume": "1.0",
                    "type": "delivery"
                },
                "shipping_origin": {
                    "warehouse_code": "401"
                },
                "shipping_destination": {
                    "customer": {
                        "name": "Marcela Gonzalez Arias",
                        "email": "mgggg@outlook.com",
                        "phone": "977623070"
                    },
                    "delivery_address": {
                        "home_address": {
                            "place": "Puente Alto",
                            "full_address": "Teofilo Belmar 6552, Puente Alto"
                        }
                    }
                },
                "carrier": {
                    "carrier_code": "BLX",
                    "tracking_number": "12121"
                }
            }
        }).then(envio => {
            //  console.log(response.data);
            return envio.data;
        }, (error) => {
            // console.log(error);
        });
        ;
        let objeto = {
            data: envio.data
        };
        const delivery = yield delivery_1.default.create(objeto);
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