import {  UpdateBlogType } from "../../types/blog";
import { Blog } from "./blog.model";

const createBlog = async (data: any) => {
  const result = await Blog.create(data)
  return result;
};
const getAllBlogs = async () => {
  const result = await Blog.find();
  return result;
};
const getBlogById = async (id:string) => {
  const result = await Blog.findById(id);
  return result;
};

const  updateBlog = async (id:string, blogData: UpdateBlogType) => {
  const result = await Blog.findByIdAndUpdate(id, blogData, {new:true});
  return result;
};
const  deleteBlog = async (id:string) => {
  const result = await Blog.deleteOne({_id:id});
  return result;
};

export const blogServices = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
};
