const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const sessionSchema = new Schema(
    {



        subject: {
            type: String, 
            required: true
        },

        
        topic: {
            type: String, 
            required: true
        }, 
        hours: {
            type: Number, 
            require: true
        }
    },
    {
        timestamps: true
    }

);

const Session = mongoose.model('Session',sessionSchema );
module.exports = Session;