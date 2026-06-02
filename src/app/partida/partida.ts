import { ChangeDetectionStrategy, Component, inject, model, signal, viewChild } from '@angular/core';
import { TabuleiroComponent } from "../componentes/tabuleiro/tabuleiro";
import { SelecionaCor } from '../componentes/seleciona-cor/seleciona-cor';
import { JogoControle } from '../core/inteligence/jogo-controle';
import { Temporizador } from '../componentes/temporizador/temporizador';

@Component({
  selector: 'app-partida',
  imports: [TabuleiroComponent, SelecionaCor, Temporizador],
  templateUrl: './partida.html',
  styleUrl: './partida.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Partida {

  tipo = model<'pretas' | 'brancas'>('brancas');
  jogo = inject(JogoControle);
  tabuleiro = viewChild(TabuleiroComponent);
  relogioBrancas = viewChild<Temporizador>("relogioBrancas");
  relogioPretas = viewChild<Temporizador>("relogioPretas");


  selecionaTipo(cor: 'pretas' | 'brancas') {
    this.tipo.set(cor);
  }

  iniciar() {
    this.jogo.iniciarJogo();
    this.tabuleiro()?.iniciar()
    this.relogioBrancas()?.iniciar()
  }

  parar() {
    this.relogioBrancas()?.parar()
    this.relogioPretas()?.parar()
  }

  passar() {
    this.relogioBrancas()?.parar()
    this.relogioPretas()?.iniciar()
  }

  alternar() {
    this.relogioBrancas()?.iniciar()
    this.relogioPretas()?.parar()
  }
}
