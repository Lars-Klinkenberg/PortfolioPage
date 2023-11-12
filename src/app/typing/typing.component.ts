import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss',
})
export class TypingComponent implements OnInit, OnChanges, OnDestroy {
  @Input() message = '';
  @Input() delayInSec: number = 0.2;
  @Input() stopAfterAnimation = false;

  public animatedMessage = '';
  public cursor = '|';

  private status: 'typing' | 'erasing' | 'waiting' | 'stoped' = 'typing';
  private intervalId!: any;
  private index = 0;

  ngOnInit() {
    this.subscribeToInterval();
  }

  // Update subscription
  ngOnChanges(changes: SimpleChanges): void {
    this.subscribeToInterval();
  }

  // Delete subscription
  ngOnDestroy(): void {
    this.destroyIntervalSubscription();
  }

  private subscribeToInterval() {
    if (this.intervalId) return;

    this.status = 'typing';

    this.intervalId = setInterval(() => {
      this.tick();
    }, this.delayInSec * 1000);
  }

  private destroyIntervalSubscription() {
    this.status = 'stoped';
    clearInterval(this.intervalId);
  }

  private tick() {
    if (this.status == 'typing') {
      this.typeMessage();
    }

    if (this.status == "erasing"){
      this.eraseMessage();
    }
  }

  private typeMessage() {
    if (this.index == this.message.length) {
      if (this.stopAfterAnimation) {
        this.destroyIntervalSubscription();
        return;
      }

      this.status = "erasing";
      return;
    }
    
    this.animatedMessage += this.message[this.index];
    this.index++;
  }

  private eraseMessage() {
    if( this.index == 0){
      this.status = "typing";
      return;
    }
    
    this.animatedMessage = this.animatedMessage.slice( 0, this.animatedMessage.length-1);
    this.index = this.animatedMessage.length;
    
  }
}
