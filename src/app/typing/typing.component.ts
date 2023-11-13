import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-typing',
  standalone: false,
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss',
})
export class TypingComponent implements OnInit, OnChanges, OnDestroy {
  private TICK_SPEED = 100;

  @Input() message = '';
  // minimal tick count which is required to type a char
  @Input() typingMinSpeed: number = 2;
  // maximan tick count which is required to type a char
  @Input() typingMaxSpeed: number = 5;
  // after how many ticks the cursor should blink
  @Input() cursorSpeed: number = 2;
  // If true the message gets typed and then the animation stops
  @Input() stopAfterAnimation = false;
  // Time after each animation cycle
  @Input() pauseTimeInTicks = 10;
  // accuracy in % => 100 no mistakes
  @Input() typingAccuracy = 100;

  public animatedMessage = '';
  public cursor = '|';
  public cursorIsVisible = true;

  private status: 'typing' | 'erasing' | 'waiting' | 'stoped' = 'typing';
  private intervalId!: any;
  private index = 0;
  private pauseIndex = 0;

  private tickCounter = 0;
  private nextCharTickCounter = 0;

  ngOnInit() {
    this.subscribeToInterval();
  }

  // Update variables on change
  ngOnChanges(): void {
    this.subscribeToInterval();
    this.pauseIndex = this.pauseTimeInTicks;
    this.nextCharTickCounter = this.typingMinSpeed;
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
    }, this.TICK_SPEED);
  }

  private destroyIntervalSubscription() {
    this.status = 'stoped';
    clearInterval(this.intervalId);
  }

  private tick() {
    // animate cursor
    if(this.tickCounter % this.cursorSpeed == 0){
      this.animateCursor();
    }

    // typing
    if (this.tickCounter % this.nextCharTickCounter == 0 ) {
      // generates a number between typingMinSpeed and typingMaxSpeed
      this.nextCharTickCounter = (Math.floor(Math.random() * this.typingMaxSpeed - this.typingMinSpeed) + 1) + this.typingMinSpeed;
      console.log(this.nextCharTickCounter);
      

      if (this.status == 'typing') {
        this.typeMessage();
      }

      if (this.status == 'erasing') {
        this.eraseMessage();
      }

      this.animateCursor(true);
      this.tickCounter = 0;
    }

    if (this.status == 'waiting') {
      this.wait();
    }

    this.tickCounter++;
  }

  private typeMessage() {
    if (this.index == this.message.length) {
      if (this.stopAfterAnimation) {
        this.destroyIntervalSubscription();
        return;
      }

      this.status = 'waiting';
      return;
    }

    if (this.message[this.index] == ' ') {
      this.animatedMessage += this.message[this.index];
      this.index++;
      return;
    }

    this.animatedMessage += this.message[this.index];
    this.index++;
  }

  private eraseMessage() {
    if (this.index == 0) {
      this.status = 'waiting';
      return;
    }

    this.animatedMessage = this.animatedMessage.slice(
      0,
      this.animatedMessage.length - 1
    );
    this.index = this.animatedMessage.length;
  }

  private wait() {
    if (this.pauseIndex == 0) {
      if (this.index == 0) {
        this.status = 'typing';
      } else {
        this.status = 'erasing';
      }

      this.pauseIndex = this.pauseTimeInTicks;
      return;
    }

    this.pauseIndex--;
  }

  private animateCursor(forceVisible = false) {
    this.cursorIsVisible = !this.cursorIsVisible || forceVisible;
  }
}