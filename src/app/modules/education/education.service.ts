import { Education } from "./education.model";
import { IEducation } from "./education.interface";

const createEducation = async (data: IEducation) => {
  const result = await Education.create(data);
  return result;
};

const getAllEducation = async () => {
  return await Education.find();
};

const deleteEducation = async (id: string) => {
  return await Education.findByIdAndDelete(id);
};

export const educationService = {
  createEducation,
  getAllEducation,
  deleteEducation,
};
