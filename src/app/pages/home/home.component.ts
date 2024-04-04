import { Component } from '@angular/core';
import { PageIndicatorComponent } from '../../shared/page-indicator/page-indicator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageIndicatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
