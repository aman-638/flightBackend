const mongoose =require("mongoose");

const flightSchema = new mongoose.Schema(
    {
    airline_name:{type:String,required:true},
    start:{type:String,required:true},
    end:{type:String,required:true},
    cost:{type:Number,required:true},
    start_time:{type:String,required:true},
    end_time:{type:String,required:true},
    capacity:{type:Number,required:true}
    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Flight = mongoose.model("flight",flightSchema);

module.exports=Flight;