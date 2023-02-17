const express = require('express');
const router = express.Router();



// all the sessions

router.get('/', (req, res )=>{
    res.json({
        msg: "Welcome to the creation page"     

        
    })
});

// a single session using id

router.get('/:id', (req, res)=>{
    res.json(
        {
            msg: "Here is the single session"
        }
    )
})


// delete request

router.delete('/:id', (req, res)=>{
    res.json(
    {
        msg: "The session has been deleted"
    }
    )
})



// update request
router.patch('/:id', (res, req)=>{
    res.json({
        msg: "The session has been updated"
    })
})


module.exports = router;