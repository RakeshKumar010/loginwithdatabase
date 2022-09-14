const mongoose=require('mongoose');

const employeeSchema=new mongoose.Schema({
    // name:String,
    // email:String,
    // contact:Number,
    // massage:String
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
       
    },
    contact:{
        type:Number,
        required:true,
       
    },
    massage:String
})

//connection creation(model)

const Store=new mongoose.model("Store",employeeSchema);

//Exports module
module.exports=Store;