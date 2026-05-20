const Article = require("../models/article");

// Get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single article by slug
const getArticleBySlug = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }
    res.json({ article });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new article
const createArticle = async (req, res) => {
  try {
    const { title, slug, preview, paragraph, image, status } = req.body;

    // Check duplicate slug
    const existingSlug = await Article.findOne({
      slug: (slug || title)
        ?.toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-"),
    });
    if (existingSlug) {
      return res
        .status(400)
        .json({ message: "An article with this slug already exists." });
    }

    const article = await Article.create({
      title,
      slug,
      preview,
      paragraph,
      image: image || "",
      status: status || "draft",
      createdBy: req.user?.id || null,
    });

    res.status(201).json({ article });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update article
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;

    // Check duplicate slug excluding current article
    if (req.body.slug) {
      const existingSlug = await Article.findOne({
        slug: req.body.slug.toLowerCase().trim(),
        _id: { $ne: id },
      });
      if (existingSlug) {
        return res
          .status(400)
          .json({ message: "An article with this slug already exists." });
      }
    }

    const article = await Article.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.json({ article });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Toggle article active status
const toggleArticleStatus = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }

    article.isActive = !article.isActive;
    await article.save();

    res.json({ article });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete article
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found." });
    }
    res.json({ message: "Article deleted successfully." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  toggleArticleStatus,
  deleteArticle,
};
