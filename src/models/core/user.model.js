const { Schema } = require("mongoose");
const { v4: uuid } = require('uuid');
const { db } = require("../../loaders/db.loader.js");
const bcrypt =require('bcrypt');

exports.USER_ROLES = ['admin', 'entrepreneur', 'investor'];


const UserSchema = new Schema({
    uuid: {
        type: Schema.Types.String,
        default: () => uuid(),
        unique: true,
        index: true,
    },
    name: {
        type: Schema.Types.String,
        required: true,
    },
    organizationName: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    role: {
        type: Schema.Types.String,
        enum: exports.USER_ROLES, 
        required: true,
    },

}, {
    timestamps: true,
});

UserSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(12, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

const User = db.model('User', UserSchema);

module.exports = {
    User
};
