import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageIndicatorComponent } from './page-indicator/page-indicator.component';
import { TypingComponent } from './typing/typing.component';

@NgModule({
  imports: [BrowserModule, RouterOutlet, BrowserAnimationsModule],
  declarations: [AppComponent, PageIndicatorComponent, TypingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


