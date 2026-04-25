import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChess, faChessBoard, faChildDress } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-inicio',
  imports: [FontAwesomeModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  private readonly router = inject(Router);

  icones = {
    faChessBoard,
    faChess,
    faChildDress
  }


  novaPartida() {
    this.router.navigate(['partida']);
  }
  opcoes() { }
  verPartidas() { }
} 
