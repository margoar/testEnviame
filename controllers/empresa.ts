import {Request, Response} from 'express';
import Empresa from '../models/empresa';
import faker from 'faker';
import { validateRut, generateRut } from '@fdograph/rut-utilities';


export const crearEmpresa = async(req: Request, res:Response) =>{
    const {body} = req;

    try {
        //validar el rut
        console.log(body.rut);
        
        if(!validateRut(body.rut)){
            return res.status(400).json({
                msg: `rut invalido`
            });
        }
        
        //Validamos existencia previa empresa para evitar registros duplicados.
        const existeEmpresa = await Empresa.findOne({
            where:{
                rut:body.rut.replace('.','').replace('-','')
            }
        });
        
        if(existeEmpresa){
            return res.status(400).json({
                msg: `Ya existe una empersa con el rut ${body.rut}`
            });
        }

        const empresa = await Empresa.create(body);
 
        res.json(empresa);
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });        
    }
}

export const listarEmpresas = async (req: Request, res:Response) =>{

    const empresas = await Empresa.findAll(
        {
            //trae empresas activas
            where:{
                estado:1
            }
        }
    );
    res.json (empresas);
}

export const obtenerEmpresa = async(req: Request, res:Response) =>{
    
    const {id} = req.params;
    const empresa = await Empresa.findByPk(id);

    if(empresa){
        res.json(empresa)
    }else{
        res.status(404).json({msg:`No existe una empresa con el id ${id}`});
    }
}

export const actualizarEmpresa = async(req: Request, res:Response) =>{
    const {id} = req.params;
    const {body} = req;
    
    try {
        const empresa = await Empresa.findByPk(id);

        if(!empresa){
            return res.status(404).json({
                msg:`No existe una empresa con el id ${id}`
            });
        }

        await empresa.update(body);

        res.json(empresa);
        
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        });      
    }
}

export const eliminarEmpresa = async(req: Request, res:Response) =>{
    const {id} = req.params;

    const empresa = await Empresa.findByPk( id );
        if(!empresa){
            return res.status(404).json({
                msg: `No existe una empresa con el id ${id}`
            });
        }

        //Eliminacion fisica
        await empresa.destroy();
        res.status(200).json({
            msg: `la empresa con el id ${id} se ha eliminado correctamente`
        });
}

export const generaEmpresasFake= async(req: Request, res:Response) =>{
    const {isFake} = req.params;

        try {
            let empresasFake = [];
            if(isFake){
                for (let i = 0; i <= 10 ; i++) {
                    let empresaFake = {

                        nombreFantasia : faker.company.companyName(),
                        razonSocial : faker.company.companyName() + ' ' + faker.company.companySuffix(),
                        rut : generateRut().replace('-',''),                    
                        direccion : faker.address.streetAddress(),
                        estado : 1
                    };
                                     
                    empresasFake.push(empresaFake);
                               
                }  
                await Empresa.bulkCreate(empresasFake);
                res.json(empresasFake);
            }
            
        } catch (error) {
            console.log(error);        
            res.status(500).json({
                msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
            });        
        }

    }

  


