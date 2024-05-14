import { Router } from 'express';
const router = Router();
import { getStatus, getStats } from '../controllers/AppController';

router.get('/status', getStatus);
router.get('/stats', getStats);

export default router;
