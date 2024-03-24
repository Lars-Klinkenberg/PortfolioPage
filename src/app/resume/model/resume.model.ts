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
  work = 'Berufserfahrung',
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

export interface Link {
  name: string;
  url: string;
}
