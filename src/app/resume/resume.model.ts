export interface Resume {
  personalData: PersonalData;
  languages: Skill[];
  skills: Skill[];
  experiences: Experience[];
  certifications: Certificates[];
}

export interface PersonalData {
  name: string;
  jobTitle: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  type?: string;
  index: number;
  maxIndex: number;
}

export interface Experience {
  type: ExperienceType;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export enum ExperienceType {
  work = 'Berufserfahrung / Praktika',
  education = 'Bildungsweg',
  project = 'Projekt',
}

export interface Certificates {
  name: string;
  date: string;
}

export enum SkillType {
  programming = 'Programmiersprachen',
  framework = 'Frameworks',
  other = 'Andere',
}

export const SkillOrder = {
  1: SkillType.programming,
  2: SkillType.framework,
  3: SkillType.other,
};
