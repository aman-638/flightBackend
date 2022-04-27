const express = require("express");

const router = express.Router();

const Flight = require("../models/Flight.model");

//api to post flight
router.post("", async (req,res) => {
    try{
        const flight=await Flight.create(req.body);
        return res.send(flight);
    }catch(err){
      return res.send(err.message);
    } 
});

//api to get all flight
router.get("", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const flight=await Flight.find()
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Flight.find().countDocuments())/size
        );

        return res.send({flight,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});

//api to search flight 
router.get("/search", async (req,res) => {
    try{
        const page = req.query.page || 1;
        const size = req.query.size || 10;
        const start = req.query.start;
        const end = req.query.end;
        const flight=await Flight.find({start:start,end:end})
        .skip((page -1)*size)
        .limit(size)
        .lean().exec();
 
        const totalPages = Math.ceil(
            (await Flight.find({start:start,end:end}).countDocuments())/size
        );

        return res.send({flight,totalPages});
    }catch(err){
      return res.send(err.message);
    } 
});


//api to update flight details
router.patch("/:id", async (req, res) => {
    try {
      const flight = await Flight.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
      });
  
      res.status(200).json({ msg: "flight updated successfully", flight });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

//api to delete user
router.delete("/:id", async (req, res) => {
    try {
      const flight= await Flight.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ msg: "flight deleted successfully",flight});
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  module.exports=router;