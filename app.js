const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const checklistRoutes = require("./routes/checklistRoutes");
const verifyToken = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(bodyParser.json());

const apiRouter = express.Router();

// Routes
apiRouter.use("/", authRoutes);
apiRouter.use("/checklist", verifyToken, checklistRoutes);

app.use("/api", apiRouter);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
