const Task =require("../model/tasks")
const errorHendlerFunction=require("../middleware/error-hendler")



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
        const error=new Error("file not found")
        error.status=404
        return next(error)
        return res.status(404).json({msg:"thare is some thing wrong"} )
     }
     res.status(200).json(tasks)
   } catch (error) {
     
   }


};
const creatTasks=async(req,res)=>{
   try {
    const tasks=await Task.create(req.body)
    if (!tasks){
        return res.status(404).json({msg:"thare is some thing wrong"} )
      }
    res.status(200).json(tasks)
   } catch (error) {
    res.status(500).json({msg:"thare is some thing wrong"})
   }
   
    const newtask=Task.create(req.body)
   res.json({msg:req.body})
    
};
const deletTasks=(req,res)=>{
    res.send("get route")
};
const updateTasks=(req,res)=>{
    res.send("get route")
};

errorHendlerFunction()

module.exports={getallTasks,
                 getTasks,
                 creatTasks,
                 deletTasks,
                 updateTasks 
}