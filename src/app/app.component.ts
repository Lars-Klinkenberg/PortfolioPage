import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
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
