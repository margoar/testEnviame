import {Request, Response} from 'express';


export const crearEmpresa = (req: Request, res:Response) =>{
    const {body} = req;
    res.json({
        msg: 'Crear empresa',
        body
    })
}

export const listarEmpresas = (req: Request, res:Response) =>{
    res.json ({
        msg: 'Listando Empresas...'
    });
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


