import express from "express"
import create from "../controllers/activities/create.js"
import read from "../controllers/activities/read.js"
import readOne from "../controllers/activities/readOne.js"
import update from "../controllers/activities/update.js"
import destroy from "../controllers/activities/destroy.js"

let router = express.Router()

// CREATE
router.post("/", create)

// READ
router.get("/", read), 
router.get("/:activity_id", readOne)

// UPDATE
router.put("/:activity_id", update)

// DESTROY
router.delete("/:activity_id", destroy)

export default router
