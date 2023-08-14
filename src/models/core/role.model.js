import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { db } from '../../loaders/db.loader.js';


const LocationSchema = new Schema({
    uuid: {
        type: Schema.Types.String,
        default: () => uuid(),
        unique: true
    },
    name: {
        type: String
    },
    country: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


const Location = db.model('Location', LocationSchema, "locationd");

export {
    Location
}