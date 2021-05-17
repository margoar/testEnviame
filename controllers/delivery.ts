import {Request, Response} from 'express';
import Delivery from '../models/delivery';


export const crearDelivery = async( req: Request,res:Response) =>{
  
    try {
      
        res.status(200).json({
            msg :`creando envio`
        });
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}

export const tiempoEntrega = async( req: Request,res:Response) =>{
     //recibe distancia 
    const {body} = req;
    let distancia = body.distancia;
    let rango = Math.floor(distancia/100);

    console.log("rango " + rango);
    
    try {
        var tiempoEnvio = 0;

        if(distancia >= 100 && distancia < 300){
            tiempoEnvio = 1;
        }else if( distancia >= 300 && distancia < 400){
            tiempoEnvio = 2;
        }else if (distancia >= 400 && distancia < 500){
            tiempoEnvio = 3;
        }else if(distancia >= 500){
            tiempoEnvio = (rango - 1)+(rango - 2);
        }

                  
      
        let resp = tiempoEnvio > 0 ?  `Su compra llegara en  ${tiempoEnvio} dias`: `Su compra llegara hoy`;
      
        res.status(200).json({
            msg :resp
        });
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}