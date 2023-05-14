import { Router } from 'express';
import {
  getAllTickets
} from '../controllers/lottery.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-tickets', getAllTickets);


export default router;
