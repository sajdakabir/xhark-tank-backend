import { Schema } from "mongoose";
import { v4 as uuid } from 'uuid';
import { db } from "../../loaders/db.loader.js";
import bcrypt from 'bcrypt';

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
    roles: {
        type:Schema.Types.Array,
        default:["User"]
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

export {
    User
};
