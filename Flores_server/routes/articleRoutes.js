const express = require("express");
const {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

const router = express.Router();

// Main routes
router.route("/").get(getArticles).post(createArticle);

// Routes with ID
router.route("/:id").put(updateArticle).delete(deleteArticle);

module.exports = router;
