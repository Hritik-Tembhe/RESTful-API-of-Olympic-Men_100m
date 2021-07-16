const express = require("express")
const router = new express.Router();

const MensRanking = require("../models/mens");


// Handle post requests 
router.post("/mens", async (req,res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(er){
        res.status(400).send(er);
    }
})

// Handle get request
router.get("/mens", async (req,res) => {
    try{
        const getMens = await MensRanking.find({}).sort({"ranking" : 1});
        res.send(getMens);
    }catch(er){
        res.status(400).send(er);
    }
})

// Handle get request for individual
router.get("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.send(getMen);
    }catch(er){
        res.status(400).send(er);
    }
})


// Handle patch request for individual
router.patch("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id , req.body , {new : true});
        res.send(getMen);
    }catch(er){
        res.status(500).send(er);
    }
})


// Handle delete request for individual
router.delete("/mens/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);
    }catch(er){
        res.status(500).send(er);
    }
})

module.exports = router;