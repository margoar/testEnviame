import {Request, Response} from 'express';
import Empresa from '../models/empresa';


export const crearEmpresa = (req: Request, res:Response) =>{
    const {body} = req;

    try {
        res.json({
            msg: 'Crear empresa',
            body
        })
    } catch (error) {
        console.log(error);        
        res.status(500).json({
            msg: 'Ups! ha ocurrido un problema, hable con el administrador.'
        })
        
    }

}

export const listarEmpresas = async (req: Request, res:Response) =>{

    const empresas = await Empresa.findAll();
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


export const actualizarEmpresa = (req: Request, res:Response) =>{
    const {id} = req.params;
    const {body} = req;
    res.json({
        msg: 'actualizando empresa',
        body ,
        id
    })
}

export const eliminarEmpresa = (req: Request, res:Response) =>{
    const {id} = req.params;
    res.json({
        msg: 'eliminando empresa por id',
        id
    })
}


