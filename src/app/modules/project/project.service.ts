import { Project } from "./project.model";

const createProject = async (payload: any) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjects = async () => {
  return await Project.find();
};

const getSingleProject = async (id: string) => {
  return await Project.findById(id);
};

const updateProject = async (id: string, payload: any) => {
  return await Project.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProject = async (id: string) => {
  return await Project.findByIdAndDelete(id);
};

export const projectServices = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
