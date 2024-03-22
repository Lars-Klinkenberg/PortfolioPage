import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'resume-skill-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-index.component.html',
  styleUrl: './skill-index.component.scss'
})
export class SkillIndexComponent implements OnChanges{
  arr = new Array(0);
  @Input()
  skillName!: string;
  @Input() scaleIndex: number = 1;
  @Input() scaleMax: number = 5;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.arr = this.counter(this.scaleMax);
  }

  counter(i : number): Array<any>{
    console.log("COUNTER");
    console.log( new Array(i));
    return new Array(i);
  }
}
