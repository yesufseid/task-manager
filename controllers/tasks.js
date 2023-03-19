const Task =require("../model/tasks")




const getallTasks=async(req,res)=>{
    try {
        const tasks= await Task.find()
        res.json({tasks})
    } catch (error) {
       
    }

};
const getTasks=async(req,res,next)=>{
   try {
    const {id:Taskid}=req.params;
     const tasks= await  Task.findOne({_id:Taskid})
     if (!tasks){
        const error=new Error("fuck off")
        error.status=404
        
        return next(error)
        // return res.status(404).json({msg:"thare is some thing wrong"} )
     }
     res.status(200).json(tasks)
   } catch (error) {
     return next(error)
   }


};
const creatTasks=async(req,res,next)=>{
   try {
    const tasks=await Task.create(req.body)
    res.status(200).json(tasks)
   } catch (error) {
     return next(error)
   }
    
};
const deletTasks=(req,res)=>{
    res.send("get route")
};
const updateTasks=(req,res)=>{
    res.send("get route")
}

module.exports={getallTasks,
                 getTasks,
                 creatTasks,
                 deletTasks,
                 updateTasks 
}