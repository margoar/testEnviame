import {Request, Response} from 'express';

export const obtenerPalindromas = async(req: Request, res:Response) =>{
    const {body} = req;
    console.log(body);
    
    try {
       
        let cadena = body.cadena;
        let t = cadena.length;
        let palabras = [];
      
        for (let m = 0; m < t; m++) 
        {
          for (let n = m+1; n<t+1; n++) 
          {
            let palabraFinal = cadena.slice(m,n);
            const strReversed = palabraFinal.split("").reverse().join("");
      
            if(palabraFinal.length>=3 && strReversed === palabraFinal ){
              palabras.push(cadena.slice(m,n));
            }
            
          }
        }

        res.json(palabras);
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}

  


