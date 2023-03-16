const express=require("express");
const router=express.Router();
const {getallTasks,
      getTasks,
      creatTasks,
      deletTasks,
      updateTasks} =require("../controllers/tasks")



router.route("/").get(getallTasks).post(creatTasks)
router.route("/:id").get(getTasks).delete(deletTasks).patch(updateTasks)


module.exports=router;