const Session = require('../models/Session.js');

// get all the sessions from the database

const getAllSessions = (req, res )=>{
    res.json(
        {
            msg: "Welcome to the creation page"
        }
    )
}




// get a single session from the database
const singleSession = (req, res )=>{
    res.json(
        {
            msg: "This is the single session having the id that you specified."
        }
    )
}


// post a single session to the database
const postSession = async (req, res)=>{

    // destructring from the request
    const {subject, topic, hours } = req.body;



    try{
        const studyHour = await Session.create({subject, topic, hours});
        res.status(200).json(studyHour)


    } catch(err ){

        res.status(400).json({
            error: err.message
        })
    }

}



// update a single session in the database
const sessionUpdate = (req, res)=>{
    res.json({
        msg: "This session that you specified has been updated."
    })
}


// delete a single session from the database
const deleteSession = (req, res )=>{
    res.json(

        {
            msg: "The session has been delted."
        }
    )
}

module.exports = {

    getAllSessions, 
    singleSession, 
    postSession, 
    sessionUpdate, 
    deleteSession


}