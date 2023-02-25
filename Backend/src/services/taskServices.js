const taskModel=require("../models/post")



exports.createTaskServices=async(body)=>{
     return taskModel.create(body)

}

exports.deleteTaskServices=async(id)=>{
     return taskModel.deleteOne({_id: id})

}

exports.UpdateTaskServices=async(id,todoListData)=>{

     return await taskModel.updateOne({_id:id},todoListData)
 }

exports.taskListCountServices=async(email)=>{

     return taskModel.aggregate([
          {$match:{email:email}},
          {$group:{_id:"$status",sum:{$count:{}}}}
  ])
}

exports.findProductsByIDServices=async(query)=>{
     return taskModel.find(query)
}


          
exports.findAllProductsServices=async()=>{
     return taskModel.aggregate([
          {$project:{_id:1,title:1,description:1,image:1,name:1,email:1,
                    createdAt:{
               $dateToString:{
                    date:"$createdAt",
                    format:`%d-%m-%Y`
               }
                    }}}
     ])


}

