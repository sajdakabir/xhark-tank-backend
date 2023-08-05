const jwt=require('jsonwebtoken');
const {environment}=require('../../loaders/environment.loader');

const generateJWTToken = async (user) => {
    const token = jwt.sign(
        {
            id: user.uuid,
            email: user.email,
            roles: user.roles
        },
        environment.JWT_SECRET, {
            expiresIn: environment.JWT_EXPIRY,
            audience: environment.JWT_AUDIENCE,
            issuer: environment.JWT_ISSUER
        });
    return token;
};

module.exports={
    generateJWTToken
}