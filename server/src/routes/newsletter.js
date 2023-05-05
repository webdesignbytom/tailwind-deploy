import { Router } from 'express';

import { getAllNewsletterMembers } from '../controllers/newsletter.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-newsletter-members', getAllNewsletterMembers);
router.post('/newsletter-signup');

export default router;
