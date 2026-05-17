const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    preview: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },
  },
  {
    timestamps: true, // ✅ auto-manages createdAt + updatedAt
  },
);

// ✅ Async style — no next() needed in Mongoose 7+/8
articleSchema.pre("save", async function () {
  // nothing needed here — timestamps: true handles updatedAt
});

// ✅ Fires on findByIdAndUpdate
articleSchema.pre("findOneAndUpdate", async function () {
  this.set({ updatedAt: Date.now() });
});

module.exports = mongoose.model("Article", articleSchema);
