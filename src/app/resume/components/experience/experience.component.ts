import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  @Input() jobTitle!: string;
  @Input() company!: string;
  @Input() startDate!: string;
  @Input() endDate: string | undefined;
  @Input() descriptions: string[] | undefined;

  getDate() {
    if (!this.endDate) return this.startDate;
    if (this.endDate === this.startDate) {
      return this.startDate;
    }

    return `${this.startDate} - ${this.endDate}`;
  }
}
