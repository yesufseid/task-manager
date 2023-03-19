const Task =require("../model/tasks")
const asyncWarapper=require("../middleware/async")




const getallTasks=asyncWarapper( async(req,res)=>{
        const tasks= await Task.find({})
        res.status(200).json({tasks})
});


const getTasks=asyncWarapper( async(req,res,next)=>{
    const {id:Taskid}=req.params;
     const tasks= await  Task.findOne({_id:Taskid})
     if (!tasks){
        const error={
          message:`file not found in this  ${Taskid} id`,
          status:404
        }
        
        res.status(404).json({msg:error})
        // return res.status(404).json({msg:"thare is some thing wrong"} )
     }
     res.status(200).json(tasks)
});

const creatTasks=asyncWarapper( async(req,res,next)=>{
    const tasks=await Task.create(req.body)
    res.status(200).json(tasks)   
});

const deletTasks=asyncWarapper( async(req,res,next)=>{
      const {id:Taskid}=req.params
      const tasks=await Task.findOneAndDelete({_id:Taskid});
      if(!tasks){
        const error={
          message:`file not found in this ${Taskid} id`,
          status:404
        }
        res.status(404).json({msg:error})
      }
      res.status(200).json(tasks)
   
});

const updateTasks=asyncWarapper( async(req,res,next)=>{
    const {id:Taskid}=req.params
    const tasks=await Task.findOneAndUpdate({_id:Taskid},req.body,{returnDocument:"after"},{runValidators:true}) 
    if(!tasks){
      const error={
        message:`file not found in this ${Taskid} id`,
        status:404
      }
      res.status(404).json({msg:error})
    }
    res.status(200).json(tasks)
})

module.exports={getallTasks,
                 getTasks,
                 creatTasks,
                 deletTasks,
                 updateTasks 
}