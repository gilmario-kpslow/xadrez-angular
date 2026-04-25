import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal, viewChildren } from '@angular/core';
import { CampoComponent } from "../campo/campo";
import { CommonModule } from '@angular/common';
import { faChessBishop, faChessBoard, faChessKing, faChessKnight, faChessPawn, faChessQueen, faChessRook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Tabuleiro } from '../../core/modelos/tabuleiro';
import { Posicao } from '../../core/modelos/posicao';
import { Peca } from '../../core/modelos/peca';
import { PECAS_JOGADOR, POSICOES } from '../../core/modelos/constantes';
import { JogoControle } from '../../core/inteligence/jogo-controle';

@Component({
  selector: 'app-tabuleiro',
  imports: [CampoComponent, CommonModule, FontAwesomeModule],
  templateUrl: './tabuleiro.html',
  styleUrl: './tabuleiro.css',
  host: { ngSkipHydration: 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabuleiroComponent {

  jogo = inject(JogoControle);

  tabuleiro = new Tabuleiro();
  tipo = input.required<'pretas' | 'brancas'>();
  pecas = input.required<Peca[]>()


  campos = viewChildren(CampoComponent);

  passos = signal(0);

  numeros = signal([8, 7, 6, 5, 4, 3, 2, 1]);
  letras = signal(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

  posicoes = computed(() => {
    return POSICOES(this.tipo());
  });

  constructor() {
    effect(() => {
      if (this.tipo() == 'brancas') {
        this.numeros.set([8, 7, 6, 5, 4, 3, 2, 1]);
        this.letras.set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
      } else {
        this.numeros.set([8, 7, 6, 5, 4, 3, 2, 1].reverse());
        this.letras.set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse());
      }
      this.posicionarPecas();
    });
  }

  iniciar() {
    if (this.tipo() == 'brancas') {
      this.numeros.set([8, 7, 6, 5, 4, 3, 2, 1]);
      this.letras.set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    } else {
      this.numeros.set([8, 7, 6, 5, 4, 3, 2, 1].reverse());
      this.letras.set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse());
    }
    this.posicionarPecas();
  }

  private posicionarPecas() {
    console.log('Posiciona pecas', this.pecas())

    this.campos().forEach(c => {
      const pe = this.pecas().find(p => p.posicao.numero == c.posicao().numero && p.posicao.letra == c.posicao().letra);
      if (pe) {
        c.peca.set(pe);
      }
    });
  }

  mostrarMovimentos(posicao: Posicao) {
    this.campos().forEach(c => {
      c.desselecionar();

      if (!(c.posicao().numero == posicao.numero && c.posicao().letra == posicao.letra)) {
        c.marcado.set(false);
      }
    });
    console.log(posicao)
    const campo = this.campos().find(c => c.posicao().numero == posicao.numero && c.posicao().letra == posicao.letra);
    if (!campo || !campo.peca()) {
      console.log("Retornar")
      return;
    }

    if (!campo.marcado()) {
      console.log("Retornar")
      return;
    }

    const mov = campo.peca()!.movimentos()
    console.log(mov.length);
    this.campos().forEach(c => {
      const pe = mov.find(p => p.numero == c.posicao().numero && p.letra == c.posicao().letra);
      if (pe) {
        console.log("ForEach");
        c.selecionar();
      }
    });
  }

}
