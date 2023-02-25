const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const port = process.env.PORT || 4000;

// the router where users will add new sessions
const studyRouter = require('./routes/studyHours');
// the root page router

// initialzing the expess app
const app = express();


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "The Study Hours API. ",
            description: "This is the Study Hours api.  This is written in Express.js ", 
            contact: {
                name: "Owais Khan"
            }, 
            servers: ['http://localhost:4000']
        }
    }, 

    apis: ['server.js']
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
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
// Routes
/**
 * @swagger
 * /:
 *  get: 
 *    description: Use to request the welcome page.
 *    responses:
 *      '200': 
 *        description: A successful response.
 */

app.get('/', (req, res)=>{
    res.json({
        msg: "Welcome to the study hour website."
    })
})


// add a session
app.use('/api/sessions', studyRouter);
