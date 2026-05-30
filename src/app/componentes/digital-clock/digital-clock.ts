import { Component, OnDestroy, OnInit, HostBinding, signal, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-digital-clock',
  imports: [CommonModule],
  templateUrl: './digital-clock.html',
  styleUrls: ['./digital-clock.css']
})
export class DigitalClockComponent implements OnInit, OnDestroy {


  currentTime = signal('');
  tempo = input(600);
  tempoCorrido = signal(0);
  private timeSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    // Initialize the clock immediately
    this.updateClock();

    // Set up the interval observable to update the clock every 1000ms (1 second)
    this.timeSubscription = interval(1000)
      .subscribe(() => {
        this.updateClock();
        this.tempoCorrido.update(i => --i);
      });
  }

  /**
   * Formats the current date and time into HH:MM:SS format.
   */
  updateClock(): void {
    const now = new Date();

    // Get hours, minutes, and seconds, padding with '0' if single digit
    const hours = this.formatTime(now.getHours());
    const minutes = this.formatTime(now.getMinutes());
    const seconds = this.formatTime(now.getSeconds());

    this.currentTime.set(`${hours}:${minutes}:${seconds}`);
  }

  /**
   * Helper function to ensure single digits are padded with '0'.
   */
  private formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }

  ngOnDestroy(): void {
    // Crucial: Unsubscribe from the interval to prevent memory leaks
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}