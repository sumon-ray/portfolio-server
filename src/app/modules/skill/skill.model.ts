import { Schema, model } from 'mongoose';
import { ISkill } from './skill.interface';

const skillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['technical', 'soft'],
      required: true,
    },
    proficiency: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert'],
      default: 'intermediate',
    },
    icon: { type: String },
  },
  { timestamps: true }
);

export const Skill = model<ISkill>('Skill', skillSchema);
