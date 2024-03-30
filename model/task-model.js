const { default: mongoose } = require("mongoose");

const taskSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status: {
        type: String
      },
   
},
{timestamps:true}
)

const Task = mongoose.model('mirror_task', taskSchema);

module.exports = Task;