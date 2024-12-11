import express, { Router } from 'express'
const router = Router()
router.route('/').post()// create todo
router.route("/").get()//get todo
router.route("/:todo").patch()// update todo
router.route("/:todoId").delete()//delete

export default router