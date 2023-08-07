import { Router } from 'express';
import {registerEmailUserController}from '../../controllers/core/auth.controller.js';
import {loginController}from '../../controllers/core/auth.controller.js';

const router =Router();

router.route('/signup/').post(registerEmailUserController);
router.route('/login/').post(loginController);

export default router;
