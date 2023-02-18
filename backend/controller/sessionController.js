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
const sessionUpdate = async (req, res)=>{


    // grab the id 
    const {id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "404! Invalid ID!"});
    }

    // grabbing the properties
    const {subject, topic, hours} = req.body;

    // updating the session if the id is valid
    const updatedSession = await Session.findOneAndUpdate({_id:id},
        {
            subject: subject,
            topic: topic,
            hours: hours


        })
    if(!updatedSession){
        res.status(404).json({msg: "The session does not exist"});
    }

    res.status(200).json(updatedSession);
}


// delete a single session from the database
const deleteSession = async (req, res )=>{


    const {id } = req.params;


    // checking to see if the id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "404! Invalid ID"});
    }

    // checking to see if the database has the document user is asking about
    // const targetSession = await Session.findById(id);
    // if(!targetSession){
    //     return res.json({error: "Could not delete the document as it does not exit."})
    // }

    // deleting the document if does exist.dd
    
     const deletedSession = await Session.findOneAndDelete({_id:id});

     if(!deletedSession){
            return res.json({msg: "The session has been deleted"})
        }
        // res.json(deleteSession, {msg:"The session has been deleted."});

   res.json(workout);
    

}

module.exports = {

    getAllSessions, 
    singleSession, 
    postSession, 
    sessionUpdate, 
    deleteSession


}