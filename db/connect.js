const mongoose=require("mongoose");


const connectDb=(url)=>{

 mongoose.connect(url);
 mongoose.set("strictQuery",false)
}

module.exports=connectDb;