const {User} = require('../../models/core/user.model');
const bcrypt = require('bcrypt');

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


module.exports = {
    signupService
}