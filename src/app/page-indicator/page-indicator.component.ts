import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'page-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-indicator.component.html',
  styleUrl: './page-indicator.component.scss'
})
export class PageIndicatorComponent implements OnChanges{
  @Input() maxPageCount = 0;
  @Input() activeIndex = 0;

  @Output() indexClicked = new EventEmitter<number>();

  public maxCountArray = [];

  ngOnChanges(){
    this.maxCountArray = [].constructor(this.maxPageCount)
    console.log(this.maxCountArray);
    console.log(this.maxPageCount); 
    
  }

  public onClick(index: number){
    this.indexClicked.emit(index)
  }

  public getClasses(index: number){
    return this.activeIndex == index ? "indicator active" : "indicator";
  }

}
