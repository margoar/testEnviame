import {Request, Response} from 'express';
import Empresa from '../models/empresa';


export const crearEmpresa = (req: Request, res:Response) =>{
    const {body} = req;
    res.json({
        msg: 'Crear empresa',
        body
    })
}

export const listarEmpresas = async (req: Request, res:Response) =>{

    const empresa = await Empresa.findAll();
    res.json (empresa);
}

export const obtenerEmpresa = (req: Request, res:Response) =>{
    const {id} = req.params;
    res.json({
        msg: 'obtener empresa por id',
        id
    })
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


