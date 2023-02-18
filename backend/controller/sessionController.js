const Session = require('../models/Session.js');
const mongoose = require("mongoose");

// get all the sessions from the database

const getAllSessions = async (req, res )=>{

    const allSessions = await Session.find({})
    res.json(allSessions)
}




// get a single session from the database
const singleSession = async(req, res )=>{

    const { id } = req.params;
   
    // checking the id's validity

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json(
            {
                msg: "404! Oops! Please use a valid ID. "
            }
        )
    }
    const singleSession = await Session.findById(id);

    if (!singleSession){
       return res.status(404).json(
            {
                error: "404. We could not find what you were looking for"
            
            
            }
        )
    }

    res.status(200).json(singleSession);
    
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