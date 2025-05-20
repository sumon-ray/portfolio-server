export type ISkillType = 'technical' | 'soft';
export type ISkillProficiency = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface ISkill {
  name: string;
  type: ISkillType;
  proficiency: ISkillProficiency;
  icon?: string;
}
