import { Resume } from "./resume.model";

const saveResumeUrl = async (url: string) => {
  const result = await Resume.create({ url });
  return result;
};

const getLatestResume = async () => {
  const latest = await Resume.findOne().sort({ createdAt: -1 });
  return latest;
};

export const ResumeService = {
  saveResumeUrl,
  getLatestResume,
};
