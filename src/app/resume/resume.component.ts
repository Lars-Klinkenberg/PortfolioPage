import { Component } from '@angular/core';
import { SkillIndexComponent } from './components/skill-index/skill-index.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SkillIndexComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  testSkill = "testSkillName"
}
