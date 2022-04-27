const mongoose =require("mongoose");

const flightSchema = new mongoose.Schema(
    {
    flight_type:{type:String,required:true},
    block:{type:String,required:true},
    flight_no:{type:Number,required:true},
    flight_image:{type:String,required:true},
    residents:[{type:Object,required:true}]
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Flight = mongoose.model("flight",flightSchema);

module.exports=Flight;