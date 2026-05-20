const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required."],
      unique: true,
      trim: true,
      lowercase: true,
    },
    preview: {
      type: String,
      required: [true, "Preview is required."],
      trim: true,
    },
    paragraph: {
      type: String,
      required: [true, "Paragraph is required."],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: {
        values: ["draft", "published", "archived"],
        message: "Status must be draft, published, or archived.",
      },
      default: "draft",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// Auto-generate slug from title if slug is not provided
articleSchema.pre("validate", function () {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
});

// Ensure updatedAt is always refreshed on findOneAndUpdate
articleSchema.pre("findOneAndUpdate", function () {
  this.set({ updatedAt: Date.now() });
});

// Virtual: full display name of status
articleSchema.virtual("statusLabel").get(function () {
  const labels = {
    draft: "Draft",
    published: "Published",
    archived: "Archived",
  };
  return labels[this.status] || this.status;
});

// Virtual: is the article publicly visible
articleSchema.virtual("isPublic").get(function () {
  return this.status === "published" && this.isActive;
});

module.exports = mongoose.model("Article", articleSchema);
