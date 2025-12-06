import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Writer",
    },
  },
  {
    // Add options for JSON serialization
    toJSON: {
      virtuals: true, // Include virtuals (optional)
      transform: (doc, ret) => {
        // 1. Rename _id to id
        ret.id = ret._id.toString();
        // 2. Remove the old _id field
        delete ret._id;
        // 3. Remove the mongoose version key (optional, but clean)
        delete ret.__v;
        return ret;
      },
    },
  }
);

export default mongoose.model("blog", blogSchema);
