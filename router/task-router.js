const express = require ('express')
const router = express.Router()
const controller = require('../controller/task-controller')

router.get("/getrouter",controller.getData)
router.post("/addrouter",controller.postData)
router.put("/updaterouter/:_id",controller.updateData)
router.delete("/deleterouter/:_id",controller.deleteData)

module.exports = router