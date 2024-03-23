import { ExperienceType, Resume, SkillType } from './resume.model';

const myResume: Resume = {
  personalData: {
    name: 'Lars Klinkenberg',
    jobTitle: 'Full-Stack-Entwickler',
  },
  languages: [
    {
      name: 'Deutsch',
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Englisch',
      index: 3,
      maxIndex: 5,
    },
  ],
  skills: [
    {
      name: 'HTML & CSS',
      type: SkillType.programming,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'JavaScript / TypeScript',
      type: SkillType.programming,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Angular',
      type: SkillType.framework,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Java',
      type: SkillType.programming,
      index: 3,
      maxIndex: 5,
    },
    {
      name: 'Node.js',
      type: SkillType.framework,
      index: 2,
      maxIndex: 5,
    },
    {
      name: 'MySQL',
      type: SkillType.programming,
      index: 3,
      maxIndex: 5,
    },
    {
      name: 'MongoDB',
      type: SkillType.programming,
      index: 1,
      maxIndex: 5,
    },
    {
      name: 'Scrum',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Git',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
    {
      name: 'Linux',
      type: SkillType.other,
      index: 4,
      maxIndex: 5,
    },
  ],
  experiences: [
    {
      type: ExperienceType.work,
      jobTitle: 'Studienbegleitendes Praktikum als Fullstack-Entwickler',
      company: 'adesso SE',
      startDate: '01.10.2020',
      endDate: '31.03.2024',
      description:
        'Ich habe meinen Fokus besonders auf die Frontendentwicklung gesetzt. Hier habe ich durch meine Arbeit in Kundenprojekten meine Kenntnisse in JavaScript und Angular weiter vertiefen können.In war hauptsächlich in Kundenprojekten für Chatbotlösungen beschäftigt. Hier war ich Hauptverantwortlicher für die Anbindung im Frontend der Kundensysteme an den Servicebot. Zudem unterstützte ich die Entwicklung neuer Features',
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Freiwilliges Praktikum',
      company: 'adesso SE',
      startDate: '01.08.2020',
      endDate: '01.10.2020',
      description: '',
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Praktikum',
      company: 'Regionales Rechenzentrum der Universität zu Köln',
      startDate: '01.06.2019',
      endDate: '01.08.2019',
      description:
        '- Erstellung neuer Websitetemplates zur Darstellung aller möglichen Funktionen des Systems - Einarbeitung in komplexere Java-Programmierumgebungen - Programmierung kleinerer Funktionen',
    },
    {
      type: ExperienceType.work,
      jobTitle: 'Praktikum',
      company: 'IT.NRW',
      startDate: '01.04.2016',
      endDate: '30.04.2016',
      description: '',
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Duales Studium -  Business Information Management',
      company: 'Provadis School of International Management and Technology AG',
      startDate: '01.10.2020',
      endDate: '31.03.2024',
      description: '',
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Fachhochschulreife',
      company: 'Berufskolleg Platz der Republik für Technik und Medien',
      startDate: '01.08.2017',
      endDate: '31.06.2020',
      description:
        'Abschluss als staatlich geprüfter informationstechnischer Assistent',
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Qualifikationsvermerk',
      company: 'Realschule Jüchen',
      startDate: '01.08.2011',
      endDate: '31.07.2017',
      description: '',
    },
    {
      type: ExperienceType.education,
      jobTitle: 'Abschluss der Grundschule',
      company: 'Grundschule Gierath',
      startDate: '01.08.2007',
      endDate: '31.06.2011',
      description: '',
    },
  ],
  certifications: [
    {
      name: 'ISTQB Certified Tester - Foundation Level (CTFL)',
      date: '01.01.2023',
    },
    {
      name: 'iSAQB - Certified Professional for Software Architecture, Foundation Level',
      date: '01.05.2022',
    },
    {
      name: 'CCNA Routing and Switching',
      date: '01.07.20218',
    },
  ],
};

export default myResume;
