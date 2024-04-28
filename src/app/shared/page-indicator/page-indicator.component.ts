import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-indicator.component.html',
  styleUrl: './page-indicator.component.scss',
})
export class PageIndicatorComponent {
  @Input() currentPage: number = 2;
  @Input() totalPages: number = 4;

  getPages(): number[] {
    return new Array(this.totalPages);
  }
}
