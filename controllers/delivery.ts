import axios from 'axios';
import {Request, response, Response} from 'express';
import Delivery from '../models/delivery';


export const crearDelivery = async( req: Request,res:Response) =>{
  
    try {
        console.log('Consumiendo Api...');
        const envio = await axios({
            method: 'POST',
            url: 'https://stage.api.enviame.io/api/s2/v2/companies/401/deliveries',
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
                "api-key": "ea670047974b650bbcba5dd759baf1ed"
               
            },
            data: { 
                "shipping_order":  {
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
                }}
          }).then(envio => {
          //  console.log(response.data);
          return envio.data;
        
          }, (error) => {
           // console.log(error);
          });;
          let objeto ={
            data: envio.data

          }
          const delivery = await Delivery.create( objeto);
        res.status(200).json({
            msg :`envio creado`
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