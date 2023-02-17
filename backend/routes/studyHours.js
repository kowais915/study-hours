const express = require('express');
const router = express.Router();



router.get('', (req, res )=>{
    res.json({
        msg: "Welcome to the creation page"     

        
    })
});



// post request

router.post('', (req, res)=>{
    res.json(
        {
            msg: "A session has been added to the database."
        }
    )
})
// delete request

// update request



module.exports = router;