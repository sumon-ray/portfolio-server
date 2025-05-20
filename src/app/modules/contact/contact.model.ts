import { Schema, model } from "mongoose";
import { IContact } from "./contact.interface";

const contactSchema = new Schema<IContact>(
  {
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact = model<IContact>("Contact", contactSchema);
