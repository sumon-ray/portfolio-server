import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    liveLink: { type: String },
    githubLink: { type: String },
    image: { type: String },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Project = model("Project", projectSchema);
