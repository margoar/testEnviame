import {Request, Response} from 'express';
import Delivery from '../models/delivery';


export const crearDelivery = async( req: Request,res:Response) =>{
  
    try {

      
        res.status(200).json({
            msg :`hola mundo`
        });
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}