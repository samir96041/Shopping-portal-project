const taskController = require('../model/task-model')

let getData = async    (req ,res)=>{
try {
    let data = await taskController.find()
    console.log("all  detail", data)
    res.json(data)
} catch (error) {
    console.log(error)
}
}

let postData = async    (req ,res)=>{
try {
    let data =  new taskController(req.body)
    let addData = await data.save()
    res.send(addData)
    console.log("added data", addData)
} catch (error) {
    console.log(error)
}
}

let updateData = async    (req ,res)=>{
    try{
        let data =await taskController.updateOne(
            req.params.id,
            {$set:req.body},
            {new:true}
        )
        res.send(data)
        }
        catch(error){
            console.log(error)
        }
}

let deleteData = async    (req ,res)=>{
    let data  = new taskController(req.params)
    try {
        
       
        let deletedata = await data.deleteOne()
        res.send(deletedata)
        console.log(deletedata)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getData, postData,updateData,deleteData}