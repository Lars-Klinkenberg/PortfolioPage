import { Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
