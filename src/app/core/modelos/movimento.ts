import { Jogador } from "./jogador";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export interface Movimento {

    inicio: Posicao;
    fim: Posicao;
    jogador: Jogador;
    peca: Peca;
}