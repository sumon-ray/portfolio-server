import { z } from "zod";

const imageUrlSchema = z.string().url().refine((url) => {
  // Check if URL ends with common image extensions
  return /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/.test(url.toLowerCase());
}, {
  message: "Invalid image URL. Must be a valid URL ending with an image extension.",
});

// Use this in your blog creation schema
export const blogSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  image: imageUrlSchema.optional(),
  isPublished: z.boolean().optional(),
});
