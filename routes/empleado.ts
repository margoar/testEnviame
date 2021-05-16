import {Router} from 'express';
import { realizarReajuste } from '../controllers/empleado';

const router = Router();

//definiendo nuestros endpoint
router.post('/', realizarReajuste);

export default router;