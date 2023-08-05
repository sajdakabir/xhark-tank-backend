const {User} = require('../../models/core/user.model');
const bcrypt=require('bcrypt');

const signupService = async (
    name,
    organizationName,
    email,
    password,
    role
) => {
    let user = await User.findOne({ email });
    if (user) {
        const error = new Error('User already exites');
        throw error;
    }
    user = await User.create({
        name,
        organizationName,
        email,
        password,
        role
    });
    return user;
}

const validateUser = async (
    email,
    password
) => {
    const user =await User.findOne({ email });
    if (!user) {
        const error =new Error('Invalid email or password');
        error.statusCode = 401;
        throw error;
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
        const error = new Error('Invalid email or password');
        error.statusCode = 401;
        throw error;
    }
    return user;
};

module.exports = {
    signupService,
    validateUser
}