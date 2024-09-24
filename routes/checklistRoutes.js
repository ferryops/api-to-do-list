const express = require("express");
const checklistController = require("../controllers/checklistController");

const router = express.Router();

router.post("/", checklistController.create);
router.get("/", checklistController.getAll);
router.delete("/:id", checklistController.delete);
router.get("/:id/item", checklistController.getChecklistDetails);
router.post("/:id/item", checklistController.createTodoItem);
router.get("/:id/item/:itemId", checklistController.getTodoItemDetails);
router.put("/:id/item/:itemId", checklistController.updateTodoItem);
router.delete("/:id/item/:itemId", checklistController.deleteTodoItem);
router.patch("/:id/item/status/:itemId", checklistController.updateTodoItemStatus);
router.patch("/:id/item/rename/:itemId", checklistController.updateTodoItemTitle);

module.exports = router;
