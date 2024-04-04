import { Component, OnInit } from '@angular/core';
import { PageIndicatorComponent } from '../../shared/page-indicator/page-indicator.component';
import { Skill } from '../../shared/skill-set/Skill';
import { SkillSetComponent } from '../../shared/skill-set/skill-set.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageIndicatorComponent, SkillSetComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      iconPath: 'github-mark-white.png',
    },
    {
      name: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      iconPath: 'github-mark-white.png',
    },
    {
      name: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      iconPath: 'github-mark-white.png',
    },
    {
      name: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      iconPath: 'github-mark-white.png',
    },
    {
      name: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      iconPath: 'github-mark-white.png',
    },
    {
      name: 'Vue',
      description:
        'Vue is a progressive framework for building user interfaces.',
      iconPath: 'github-mark-white.png',
    },
  ];

  message = new FormControl('');
  email = new FormControl('');

  ngOnInit() {}

  updateForm() {
  }
}
