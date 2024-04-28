import { Component, OnInit } from '@angular/core';
import { PageIndicatorComponent } from '../../shared/page-indicator/page-indicator.component';
import { Skill } from '../../shared/skill-set/Skill';
import { SkillSetComponent } from '../../shared/skill-set/skill-set.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PageIndicatorComponent,
    SkillSetComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'TypeScript',
      description:
        'I have over 3 years of experience using TypeScript in a business environment.',
      iconPath: 'ts-logo-512.png',
    },
    {
      name: 'Angular',
      description:
        'Angular is my go-to framework for web development. I have used it in multiple projects, including this website.',
      iconPath: 'angular-icon-logo.png',
    },
    {
      name: 'HTML & CSS',
      description:
        'I have over 5 years of experience with HTML and CSS, which I used to create responsive and visually appealing webapps.',
      iconPath: 'html5.png',
    },
    {
      name: 'Java',
      description:
        'I used Java in a variety of projects as my job as a full-stack developer.',
      iconPath: 'java.png',
    },
    {
      name: 'C & C#',
      description:
        'I learned coding using both C and C#. With C, I developed small projects on a Raspberry Pi, while I utilized C# to create user interfaces in WPF applications.',
      iconPath: 'C_Logo.png',
    },
    {
      name: 'MySQL & MongoDB',
      description:
        'MySQL and MongoDB are database management systems I learned to use in school and university. I\'ve applied both in multiple projects, leveraging their respective strengths for efficient data management.',
      iconPath: 'mongodb-logo.png',
    },
  ];

  message = new FormControl('');
  email = new FormControl('');

  ngOnInit() {}

  updateForm() {}
}
