import {Request, Response} from 'express';

export const obtenerFibonacci = async(req: Request, res:Response) =>{
    const {body} = req;
    console.log(body);
    
    try {
       
     
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}

  


