const Task =require("../model/tasks")



const getallTasks=async(req,res)=>{
    try {
        const tasks= await Task.find({})
        res.json({tasks})
    } catch (error) {
       console.log(error); 
    }
    

};
const getTasks=(req,res)=>{

        res.send(req.params.id)
       
};
const creatTasks=(req,res)=>{
    const newtask=Task.create(req.body)
   res.json({msg:req.body})
    
};
const deletTasks=(req,res)=>{
    res.send("get route")
};
const updateTasks=(req,res)=>{
    res.send("get route")
};



module.exports={getallTasks,
                 getTasks,
                 creatTasks,
                 deletTasks,
                 updateTasks 
}