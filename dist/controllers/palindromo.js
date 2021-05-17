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
exports.obtenerPalindromas = void 0;
const obtenerPalindromas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body);
    try {
        let cadena = body.cadena;
        let t = cadena.length;
        let palabras = [];
        for (let m = 0; m < t; m++) {
            for (let n = m + 1; n < t + 1; n++) {
                let palabraFinal = cadena.slice(m, n);
                const strReversed = palabraFinal.split("").reverse().join("");
                if (palabraFinal.length >= 3 && strReversed === palabraFinal) {
                    palabras.push(cadena.slice(m, n));
                }
            }
        }
        res.json(palabras);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });
    }
});
exports.obtenerPalindromas = obtenerPalindromas;
//# sourceMappingURL=palindromo.js.map