import { Schema } from "mongoose";
import { v4 as uuid } from 'uuid';
import db from '../../loaders/db.loader.js';

const pitchSchema= Schema({
    uuid: {
        type: Schema.Types.String,
        default: () => uuid(),
        unique: true,
        index: true,
    },
    entrepreneurName:{
        type: Schema.Types.String,
        required: true,
    },
    pitchTitle:{
        type:Schema.Types.String,
        require:true
    },
    pitchIdea:{
        type:Schema.Types.String,
        require:true
    },
    askAmount:{
        type:Schema.Types.Number,
        require:true
    },
    equity:{
        type:Schema.Types.Number,
        require:true
    }
},{
    timestamps: true,
});

const Pitch =db.model('Pitch',pitchSchema);

export {
    Pitch
};
