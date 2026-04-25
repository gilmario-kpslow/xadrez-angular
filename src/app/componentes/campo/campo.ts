import { CommonModule } from '@angular/common';
import { Component, computed, input, model, output, signal } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { Peca } from '../../core/modelos/peca';
import { Posicao } from '../../core/modelos/posicao';
import { LETRAS, NUMEROS } from '../../core/modelos/constantes';



@Component({
  selector: 'app-campo',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './campo.html',
  styleUrl: './campo.css',
})
export class CampoComponent {

  clicado = output<CampoComponent>();

  marcou = output<CampoComponent>();

  cor = input.required<'brancas' | 'pretas'>();
  posicao = input.required<Posicao>();
  numero = computed(() => {
    return NUMEROS[this.posicao().numero];
  })
  letra = computed(() => {
    return LETRAS[this.posicao().letra];
  })
  peca = model<Peca>();
  marcado = signal(false);

  movimentoPossivel = signal(false);

  marcar() {
    if (!this.peca()) {
      return;
    }
    this.marcado.update(a => !a);
    this.clicado.emit(this);
  }


  selecionar() {
    this.movimentoPossivel.set(true);
  }

  desselecionar() {
    this.movimentoPossivel.set(false);
  }

}

