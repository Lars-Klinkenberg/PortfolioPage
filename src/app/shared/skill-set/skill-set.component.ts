import { Component, Input } from '@angular/core';
import { Skill } from './Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  @Input() skills: Skill[] = [];

  getImagePath(skill: Skill): string {
    return `/assets/${skill.iconPath}`;
  }
}
