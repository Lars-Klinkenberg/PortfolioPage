import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-skill-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-index.component.html',
  styleUrl: './skill-index.component.scss',
})
export class SkillIndexComponent {
  @Input()
  skillName!: string;
  @Input() scaleIndex: number = 1;
  @Input() scaleMax: number = 5;

  counter(i: number): Array<any> {
    return new Array(i);
  }
}
