const express = require("express");
const router = express.Router();
const taskController = require("./controllers/taskController");
const { validateBody } = require("./middlewares/tasksMiddleware");

router.get("/tasks", taskController.getAll);
router.post("/tasks",validateBody, taskController.createTask);
router.delete("/tasks/:id",taskController.deleteTask);
router.put("/tasks/:id",taskController.updateTask);

module.exports = router;
