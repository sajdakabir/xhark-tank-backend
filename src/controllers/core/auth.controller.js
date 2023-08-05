const {signupService}=require('../../services/core/auth.services');

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

module.exports = {
    registerEmailUserController
};
