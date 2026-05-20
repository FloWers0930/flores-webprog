const express = require("express");
const {
  getArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  toggleArticleStatus,
  deleteArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.get("/slug/:slug", getArticleBySlug);
router.route("/").get(getArticles).post(createArticle);
router.route("/:id").put(updateArticle).delete(deleteArticle);
router.patch("/:id/toggle", toggleArticleStatus);

module.exports = router;
