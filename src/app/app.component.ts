import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageIndicatorComponent } from './page-indicator/page-indicator.component';
import { TypingComponent } from './typing/typing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    PageIndicatorComponent,
    TypingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  pageIndex = 2;
  welcomeMessage = "Das ist ein Test!";
  pages: string[] = 
    [
        "home",
        "about"
    ];

  public navigateToPage(index: number){
    console.log("switching to ", this.pages[index]);
  }
}
