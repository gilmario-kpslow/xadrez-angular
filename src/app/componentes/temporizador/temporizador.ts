import { CommonModule } from '@angular/common';
import { Component, computed, input, OnDestroy, OnInit, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-temporizador',
  imports: [CommonModule],
  templateUrl: './temporizador.html',
  styleUrl: './temporizador.css',
})
export class Temporizador implements OnInit, OnDestroy {
  currentTime = signal('');
  tempo = input.required<number>();
  tempoRestante = signal(0);

  tmepoFormatado = computed(() => {
    const hora = this.formatTime(Math.ceil(this.tempoRestante() / 60));
    const minuto = this.formatTime(this.tempoRestante() % 60);
    return `${hora}:${minuto}`;
  })
  private timeSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.tempoRestante.set(this.tempo());
    this.updateClock();
    this.iniciar();
  }

  parar() {
    this.ngOnDestroy();
  }

  iniciar() {
    this.timeSubscription = interval(1000)
      .subscribe(() => {
        this.updateClock();
        this.tempoRestante.update(i => --i);
      });
  }

  updateClock(): void {
    const now = new Date();

    const hours = this.formatTime(now.getHours());
    const minutes = this.formatTime(now.getMinutes());
    const seconds = this.formatTime(now.getSeconds());

    this.currentTime.set(`${hours}:${minutes}:${seconds}`);
  }

  private formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }

  private formata(time: number): string {
    return time.toString().padStart(2, '0');
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
