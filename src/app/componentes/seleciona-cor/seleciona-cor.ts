import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-seleciona-cor',
  imports: [],
  templateUrl: './seleciona-cor.html',
  styleUrl: './seleciona-cor.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelecionaCor {
  selecionado = output<'pretas' | 'brancas'>();

  selecionar(cor: 'pretas' | 'brancas') {
    this.selecionado.emit(cor);
  }

} 
