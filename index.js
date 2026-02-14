const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
    origin:"*",
}));
const {initializeDatabase} = require("./db/db.connect");

const Meetup = require("./models/meetup.models");
app.use(express.json())
initializeDatabase();


async function createMeet(newMeet){
    try{
        const meetup = new Meetup(newMeet);
        const saveMeet = await meetup.save();
        return saveMeet;

    }
    catch(error){
        throw error
    }
}
app.post("/create",async (req,res) =>{
    console.log("Request body:",req.body);
    try{
        const savedMeet = await createMeet(req.body);
        res.status(201).json({message:"Meet added sucessfully"})
    }catch(error){
        res.status(500).json({error:"Failed to add meet"})
        console.error(error.message);
    }
});
async function readAllmeets(){
    try{
        const allMeets = await Meetup.find();
        return allMeets
    }catch(error){
        console.log(error);
    }
}
app.get("/create", async (req,res) => {
    try{
        const meets = await readAllmeets()
        if(meets.length != 0){
            res.json(meets)
        } else{
            res.status(404).json({error:'No meets found'})
        }
    }
        catch(error){
            res.status(500).json({error:"Failed to fetch meets."})
        }
    });
async function readMeetById(meetId){
    try{
        const meetByTitle = await Meetup.findOne({_id:meetId})
        return meetByTitle
    }catch(error){
        console.log(error);
    }
}
app.get("/meetups/:meetId", async (req,res) =>{
    try{
        const meetup= await readMeetById(req.params.meetId);
        if(meetup){
            res.json(meetup);
        }else{
            res.status(404).json({error:"meet not found"})
        }
    }catch(error){
        res.status(500).json({error:"Failed to fetch meet"})
    }
})

async function readAllMeetups(){
    try{
        const allMeetups = await Meetup.find();
        return allMeetups
    }catch(error){
        console.log(error);
    }
}


app.get("/", async (req,res) => {
    try{
        const meetup = await readAllMeetups()
        if(meetup.length != 0){
            res.json(meetup)
        } else{
            res.status(404).json({error:'No meets found'})
        }
    }
        catch(error){
            res.status(500).json({error:"Failed to fetch meets."})
        }
    
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`);
})