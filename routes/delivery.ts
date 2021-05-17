import {Router} from 'express';
import { crearDelivery ,tiempoEntrega} from '../controllers/delivery';

const router = Router();

//definiendo nuestros endpoint
router.post('/', crearDelivery);
router.get('/', tiempoEntrega);


export default router;