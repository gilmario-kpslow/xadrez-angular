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
  tempo = input.required<number>();
  tempoRestante = signal(0);

  tmepoFormatado = computed(() => {
    const hora = this.formatTime(Math.floor(this.tempoRestante() / 60));
    const minuto = this.formatTime(this.tempoRestante() % 60);
    return `${hora}:${minuto}`;
  })
  private timeSubscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.tempoRestante.set(this.tempo());
  }

  parar() {
    this.ngOnDestroy();
  }

  iniciar() {
    if (this.timeSubscription && !this.timeSubscription.closed) {
      return;
    }


    this.timeSubscription = interval(1000)
      .subscribe(() => {
        this.tempoRestante.update(i => --i);
      });
  }

  private formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }

  ngOnDestroy(): void {
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe();
    }
  }
}
