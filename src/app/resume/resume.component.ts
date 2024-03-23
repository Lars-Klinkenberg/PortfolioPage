import { Component } from '@angular/core';
import { SkillIndexComponent } from './components/skill-index/skill-index.component';
import myResume from './resume.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SkillIndexComponent, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  resumeData = myResume;

}
