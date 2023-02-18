const express = require('express');
const router = express.Router();
// importing the model
const Session = require("../models/Session");
// importing the controller
const {
    getAllSessions,
    singleSession,
    postSession,
    sessionUpdate,
    deleteSession,
 

} = require("../controller/sessionController");


// all the sessions

router.get('/', getAllSessions );





// getting a single session using id

router.get('/:id', singleSession);



// post request

router.post('/', postSession);





// update request
router.patch('/:id', sessionUpdate);




// delete request

router.delete('/:id', deleteSession);






module.exports = router;