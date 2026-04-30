import { Router } from 'express';
import {
  handleAdminLogin,
  handleAdminLogout,
  handleAdminSession,
} from '../http/admin-auth-controller';

const router = Router();

router.get('/session', handleAdminSession);
router.post('/login', handleAdminLogin);
router.post('/logout', handleAdminLogout);

export default router;
