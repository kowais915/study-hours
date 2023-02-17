const express = require("express");
require('dotenv').config();

const port = process.env.PORT || 4000
// initialzing the expess app
const app = express();



// middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('public'));


// listening to requests

app.listen(port, (req, res)=>{
    console.log(`Listening to requests on port ${port}`);
});


// routing begins here
app.get('/', (req, res)=>{
    res.json({
        msg: "Welcome to the Study-hours app"
    })
})
