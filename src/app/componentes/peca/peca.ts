import { Component, input } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-peca',
  imports: [FontAwesomeModule],
  templateUrl: './peca.html',
  styleUrl: './peca.css',
})
export class PecaComponent {

  icone = input.required<IconDefinition>()
}
