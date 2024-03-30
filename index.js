const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const dbconnection = require("./config/db")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

dbconnection().then(()=>{
    const router = require('./router/task-router')

    app.use("/taskrouter", router)

    app.listen(port, ()=>{
        console.log(`app listening on port ${port}`)
    })
}).catch((error)=>{
    console.log("mongoDB conncetion error",error)
})
