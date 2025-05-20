import { Schema, model } from "mongoose";
import { IEducation } from "./education.interface";

const educationSchema = new Schema<IEducation>(
  {
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String },
    startYear: { type: Number, required: true },
    endYear: { type: Number },
    grade: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

export const Education = model<IEducation>("Education", educationSchema);
