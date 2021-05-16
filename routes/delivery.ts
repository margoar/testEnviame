import {Router} from 'express';
import { crearDelivery } from '../controllers/delivery';

const router = Router();

//definiendo nuestros endpoint
router.post('/', crearDelivery);

export default router;