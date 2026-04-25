import { ChangeDetectionStrategy, Component, inject, model, signal, viewChild } from '@angular/core';
import { TabuleiroComponent } from "../componentes/tabuleiro/tabuleiro";
import { SelecionaCor } from '../componentes/seleciona-cor/seleciona-cor';
import { JogoControle } from '../core/inteligence/jogo-controle';

@Component({
  selector: 'app-partida',
  imports: [TabuleiroComponent, SelecionaCor],
  templateUrl: './partida.html',
  styleUrl: './partida.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Partida {

  tipo = model<'pretas' | 'brancas'>('brancas');
  jogo = inject(JogoControle);
  tabuleiro = viewChild(TabuleiroComponent)


  selecionaTipo(cor: 'pretas' | 'brancas') {
    this.tipo.set(cor);
  }

  iniciar() {
    console.log('Iniciando')
    this.jogo.iniciarJogo();
    this.tabuleiro()?.iniciar()
  }
}
