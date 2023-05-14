import { Router } from 'express';
import { getAllTickets, getAllDraws, createNewDrawEvent, getAllDrawTickets } from '../controllers/lottery.js';
import {
  validateAuthentication,
  validateAdminRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-tickets', getAllTickets);
router.get('/all-draws', getAllDraws);
router.post('/draws/create-new-draw', createNewDrawEvent);
router.get('/draws/:drawId/all-tickets', getAllDrawTickets);


export default router;
