import { Schema, model } from "mongoose";

const resumeSchema = new Schema(
  {
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export const Resume = model("Resume", resumeSchema);
