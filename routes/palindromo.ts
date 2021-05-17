import {Router} from 'express';
import { obtenerPalindromas } from '../controllers/palindromo'

const router = Router();

//definiendo nuestros endpoint

router.post('/', obtenerPalindromas);
export default router;