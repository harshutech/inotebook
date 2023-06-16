const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    
    tittle:{
        type:String,
        require:true
    },

    description:{
        type:String,
        require:true,
    },

    tittle:{
        type:String,
        default:"General"
    },

    date:{
        type:Date,
        default:Date.now
        
    },

});

module.exports  = mongoose.model('notes',NotesSchema);