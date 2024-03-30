const { default: mongoose } = require("mongoose");

const dbconnection = ()=>{
// const dbURI = "mongodb://localhost:27017/mirror_task"       for mongoDB compass
const dbURI = "mongodb+srv://Shopping_database:dyLdmeJzfiFFa09A@cluster0.rnezkcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
console.log("Mongodb connected successfully")
return mongoose.connect(dbURI)

}

module.exports = dbconnection