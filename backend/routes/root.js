const express = require('express');
const rootRouter = express.Router();



rootRouter.get('', (req, res )=>{
    res.json({
        msg: "Welcome to the home page"   
    })
});


// all sessions in the database

rootRouter.get('/all', (req, res)=>{
    res.json(
        {
            msg:"Here are all the sessions."
        }
    )
})


module.exports = rootRouter;