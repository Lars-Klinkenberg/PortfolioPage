import { Component } from '@angular/core';
import { SkillIndexComponent } from './components/skill-index/skill-index.component';
import myResume from './model/resume.data';
import { CommonModule } from '@angular/common';
import { SkillOrder } from './model/resume.model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SkillIndexComponent, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  resumeData = myResume;
  skillOrder = SkillOrder;

  getSkillTypes() {
    return Object.values(SkillOrder);
  }

  getSkillByType(type: string) {
    return this.resumeData.skills.filter(
      (skill) => skill.type?.toString() === type
    );
  }
}
