import {Request, Response} from 'express';


export const realizarReajuste = async( req: Request,res:Response) =>{
  
    try {
        console.log(`reajustando salarios`);
        
        res.status(200).json({
            msg :`Empleados`
        });
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}