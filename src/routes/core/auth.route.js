const { Router } = require('express');
const {registerEmailUserController}=require('../../controllers/core/auth.controller');
const {loginController}=require('../../controllers/core/auth.controller')

const router =Router();

router.route('/signup/').post(registerEmailUserController);
router.route('/login/').post(loginController);

module.exports = router;