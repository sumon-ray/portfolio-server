import { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // author: {
    //   type: Types.ObjectId,
    //   ref: "Admin",
    //   required: true,
    // },
    isPublished: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
      require: true
    },
  },
  { timestamps: true }
);

export const Blog = model("Blog", blogSchema);
