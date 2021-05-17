import {Router} from 'express';
import { obtenerFibonacci } from '../controllers/fibonacci';

const router = Router();

//definiendo nuestros endpoint
router.post('/', obtenerFibonacci);
export default router;

