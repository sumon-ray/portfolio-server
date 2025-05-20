import { Skill } from './skill.model';
import { ISkill } from './skill.interface';

const createSkill = async (data: ISkill) => {
  const result = await Skill.create(data);
  return result;
};

const getAllSkills = async () => {
  const result = await Skill.find();
  return result;
};

const getSingleSkill = async (id: string) => {
  const result = await Skill.findById(id);
  return result;
};

const updateSkill = async (id: string, payload: Partial<ISkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteSkill = async (id: string) => {
  const result = await Skill.findByIdAndDelete(id);
  return result;
};

export const skillService = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
