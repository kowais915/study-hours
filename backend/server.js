const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

// the router where users will add new sessions
const studyRouter = require('./routes/studyHours');
// the root page router

// initialzing the expess app
const app = express();



// middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));


// database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database connection succeeded.");   

        // listening to requests
        app.listen(port, (req, res)=>{
            console.log(`Listening to requests on port ${port}`);
        });    

    })
    .catch(err=>{
        console.log(`There was an error connecting to the datase ${err}`);
    });



// routing begins here
app.get('/', (req, res)=>{
    res.json({
        msg: "Welcome to the study hour website."
    })
})


// add a session
app.use('/api/sessions', studyRouter);
