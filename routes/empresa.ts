import {Router} from 'express';
import { actualizarEmpresa, crearEmpresa, eliminarEmpresa, listarEmpresas, obtenerEmpresa } from '../controllers/empresa'

const router = Router();

//definiendo nuestros endpoint

router.post('/', crearEmpresa);
router.get('/', listarEmpresas);
router.get('/:id',obtenerEmpresa);
router.put('/:id',actualizarEmpresa);
router.delete('/:id',eliminarEmpresa);



export default router;