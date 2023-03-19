const mongoose=require("mongoose")
const {Schema}=mongoose;

const TaskSchema=new Schema({
   name:{
      type:String,
      required:[1,"this must be required"]
   },
   completed:Boolean 
});


module.exports=mongoose.model("Task",TaskSchema)

