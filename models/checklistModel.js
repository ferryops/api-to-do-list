const db = require("../config/db");

const Checklist = {
  create: (userId, title, description, callback) => {
    const query = "INSERT INTO checklists (user_id, title, description, created_at) VALUES (?, ?, ?, NOW())";
    db.query(query, [userId, title, description], callback);
  },

  getAll: (userId, callback) => {
    const query = "SELECT * FROM checklists WHERE user_id = ?";
    db.query(query, [userId], callback);
  },

  delete: (id, callback) => {
    const query = "DELETE FROM checklists WHERE id = ?";
    db.query(query, [id], callback);
  },

  getDetails: (checklistId, callback) => {
    const query = "SELECT * FROM todo_items WHERE checklist_id = ?";
    db.query(query, [checklistId], callback);
  },

  addTodoItem: (itemData, callback) => {
    const query = "INSERT INTO todo_items (checklist_id, title, description, status) VALUES (?, ?, ?, ?)";
    db.query(query, [itemData.checklistId, itemData.title, itemData.description, itemData.status], callback);
  },

  getTodoItemDetails: (checklistId, itemId, callback) => {
    const query = "SELECT * FROM todo_items WHERE id = ? AND checklist_id = ?";
    db.query(query, [itemId, checklistId], callback);
  },

  updateTodoItem: (checklistId, itemId, itemData, callback) => {
    const query = "UPDATE todo_items SET title = ?, description = ? WHERE id = ? AND checklist_id = ?";
    db.query(query, [checklistId, itemData.title, itemData.description, itemId], callback);
  },

  updateTodoItemStatus: (checklistId, itemId, status, callback) => {
    const query = "UPDATE todo_items SET status = ? WHERE id = ? AND checklist_id = ?";
    db.query(query, [checklistId, status, itemId], callback);
  },

  updateTodoItemTitle: (checklistId, itemId, status, callback) => {
    const query = "UPDATE todo_items SET title = ? WHERE id = ? AND checklist_id = ?";
    db.query(query, [checklistId, status, itemId], callback);
  },

  deleteTodoItem: (checklistId, itemId, callback) => {
    const query = "DELETE FROM todo_items WHERE id = ? AND checklist_id = ?";
    db.query(query, [checklistId, itemId], callback);
  },
};

module.exports = Checklist;
