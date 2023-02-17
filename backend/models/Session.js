const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const sessionSchema = new Schema(
    {
        topic: {
            type: String, 
            required: true
        }, 
        subject: {
            type: String, 
            required: true
        }, 
        hours: {
            type: Number, 
            require: true
        }
    }

);

const Session = mongoose.model('Session',sessionSchema );
module.exports = Session;