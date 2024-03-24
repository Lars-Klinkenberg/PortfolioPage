export interface Resume {
  personalData: PersonalData;
  languages: Skill[];
  skills: Skill[];
  hobbies: string[];
  experiences: Experience[];
  certifications: Certificates[];
}

export interface PersonalData {
  name: string;
  jobTitle: string;
}

export interface Skill {
  name: string;
  type?: SkillType;
  index: number;
  maxIndex: number;
}

export interface Experience {
  type: ExperienceType;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptions: string[];
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
  more = 'Sonstiges'
}

export const SkillOrder = {
  1: SkillType.programming,
  2: SkillType.framework,
  3: SkillType.other,
  4: SkillType.more
};

export interface Link {
  name: string;
  url: string;
}
