const experss=require("express");
const bodyparser=require("body-parser");
require("dotenv").config()
const app=experss();













const port=process.env.PORT || 300;
const start =async()=>{
    try {
        app.listen(port,function(){
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()