import {signupService, validateUser}from '../../services/core/auth.services.js';
import {generateJWTToken}from '../../services/utils/jwt.service.js';

const registerEmailUserController = async (req, res, next) => {
  try {
    const {name, organizationName, email, password, role }=req.body;
    await signupService(name, organizationName, email, password, role);
    res.json({
      'status': 200,
      'response': 'Thank you for signing in .'
    })
    
  } catch (err) {
    next(err);
  }
}

const loginController=async(req,res,next)=>{
  try {
    const { email, password } = req.body;
    const user = await validateUser(email, password);
    const token = await generateJWTToken(user);
    res.status(200).json({
        statusCode: 200,
        response: token
    });
  } catch (err) {
    const error = new Error(err);
    error.statusCode = err.statusCode || 500;
    next(error);
  }
}

export {
    registerEmailUserController,
    loginController
};
