import { Component, Input } from '@angular/core';

@Component({
  selector: 'resume-certificate',
  standalone: true,
  imports: [],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss',
})
export class CertificateComponent {
  @Input() name!: string;
  @Input() date!: string;
}
