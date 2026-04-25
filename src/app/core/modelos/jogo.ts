import { Jogador } from "./jogador";
import { Peca } from "./peca";
import { Tabuleiro } from "./tabuleiro";

export class Jogo {


    brancas?: Jogador;
    pretas?: Jogador;

    tabuleiro: Tabuleiro = new Tabuleiro();

    pecas: Peca[] = [];
    pecasFora: Peca[] = [];

    constructor() { }



}