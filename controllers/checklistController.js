const Checklist = require("../models/checklistModel");
const createResponse = require("../utils/responseUtils");

// Create checklist
exports.create = (req, res) => {
  const { userId, title, description } = req.body;

  Checklist.create(userId, title, description, (err, result) => {
    if (err) return res.status(500).json(createResponse("Error creating checklist", null, true));
    res.status(201).json(createResponse("Checklist created successfully", result, false));
  });
};

// Get all checklists
exports.getAll = (req, res) => {
  const userId = req.userId;

  Checklist.getAll(userId, (err, checklists) => {
    if (err) {
      return res.status(500).json(createResponse("Error getting checklists", null, true));
    }
    res.status(200).json(createResponse("Checklists retrieved successfully", checklists, false));
  });
};

// Delete checklist
exports.delete = (req, res) => {
  const { id } = req.params;

  Checklist.delete(id, (err) => {
    if (err) return res.status(500).json(createResponse("Error deleting checklist", null, true));
    res.status(200).json(createResponse("Checklist deleted successfully", null, false));
  });
};

exports.getChecklistDetails = (req, res) => {
  const checklistId = req.params.id; // Ambil checklist ID dari URL

  Checklist.getDetails(checklistId, (err, items) => {
    if (err) {
      return res.status(500).json(createResponse("Error retrieving checklist details", null, true));
    }
    res.status(200).json(createResponse("Checklist details retrieved successfully", items, false));
  });
};

exports.createTodoItem = (req, res) => {
  const checklistId = req.params.id; // Ambil checklist ID dari URL
  const { title, description } = req.body; // Ambil data dari request body

  const newItem = {
    checklistId,
    title,
    description,
    status: "pending", // Status default
  };

  Checklist.addTodoItem(newItem, (err, result) => {
    if (err) {
      return res.status(500).json(createResponse("Error creating todo item", null, true));
    }
    res.status(201).json(createResponse("Todo item created successfully", result, false));
  });
};

exports.getTodoItemDetails = (req, res) => {
  const checklistId = req.params.id;
  const itemId = req.params.itemId;

  Checklist.getTodoItemDetails(checklistId, itemId, (err, item) => {
    if (err) {
      return res.status(500).json(createResponse("Error retrieving todo item details", null, true));
    }
    res.status(200).json(createResponse("Todo item details retrieved successfully", item, false));
  });
};

exports.updateTodoItem = (req, res) => {
  const checklistId = req.params.id;
  const itemId = req.params.itemId;
  const { title, description } = req.body;

  const updatedItem = {
    title,
    description,
  };

  Checklist.updateTodoItem(checklistId, itemId, updatedItem, (err, result) => {
    if (err) {
      return res.status(500).json(createResponse("Error updating todo item", null, true));
    }
    res.status(200).json(createResponse("Todo item updated successfully", result, false));
  });
};

exports.updateTodoItemStatus = (req, res) => {
  const checklistId = req.params.id;
  const itemId = req.params.itemId;
  const { status } = req.body;

  Checklist.updateTodoItemStatus(checklistId, itemId, status, (err, result) => {
    if (err) {
      return res.status(500).json(createResponse("Error updating todo item status", null, true));
    }
    res.status(200).json(createResponse("Todo item status updated successfully", result, false));
  });
};

exports.updateTodoItemTitle = (req, res) => {
  const checklistId = req.params.id;
  const itemId = req.params.itemId;
  const { title } = req.body;

  Checklist.updateTodoItemTitle(checklistId, itemId, title, (err, result) => {
    if (err) {
      return res.status(500).json(createResponse("Error updating name item status", null, true));
    }
    res.status(200).json(createResponse("Todo item name updated successfully", result, false));
  });
};

exports.deleteTodoItem = (req, res) => {
  const checklistId = req.params.id;
  const itemId = req.params.itemId;

  Checklist.deleteTodoItem(checklistId, itemId, (err, result) => {
    if (err) {
      return res.status(500).json(createResponse("Error deleting todo item", null, true));
    }
    res.status(200).json(createResponse("Todo item deleted successfully", null, false));
  });
};
