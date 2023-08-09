import jwt from 'jsonwebtoken';
import {environment}from '../../loaders/environment.loader.js';

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

export {
    generateJWTToken
}