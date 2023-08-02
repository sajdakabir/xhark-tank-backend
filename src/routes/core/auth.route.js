const { Router } = require('express');
const {registerEmailUserController}=require('../../controllers/core/auth.controller')

const router =Router();

router.route('/signup/').post(registerEmailUserController);

module.exports = router;