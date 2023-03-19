const experss=require("express");
const bodyparser=require("body-parser");
require("dotenv").config()
const app=experss();
const tasks=require("./routes/task")
const connectDb=require("./db/connect")
const errorHendlerFunction=require("./middleware/error-hendler")
const notFound=require("./middleware/not-found")


//middlware
app.use(bodyparser.urlencoded({extended:true}))





//routes
app.use("/api/v1/tasks/",tasks);








app.use(notFound)
app.use(errorHendlerFunction)
const port=process.env.PORT || 3000;
const start =async()=>{
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(port,function(){
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start()