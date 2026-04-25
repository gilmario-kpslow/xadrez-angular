import { CasaTabuleiro } from "./casa-tabuleiro";
import { NUMEROS } from "./constantes";
import { Posicao } from "./posicao";

export class Tabuleiro {

    casas: CasaTabuleiro[] = [];

    constructor() {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                this.casas.push(new CasaTabuleiro(new Posicao(i, j)));
            }
        }
    }

}