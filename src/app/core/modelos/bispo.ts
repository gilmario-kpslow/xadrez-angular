import { faChessBishop, faChessPawn, faChessRook } from "@fortawesome/free-solid-svg-icons";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export class Bispo extends Peca {

    constructor(posicao: Posicao, cor: 'brancas' | 'pretas', selecionado: boolean) {
        super('bispo', posicao, cor, selecionado, faChessBishop);
    }

    override movimentos(): Posicao[] {
        const posicoes: Posicao[] = [];

        for (let i = 0; i < 8; i++) {
            posicoes.push(new Posicao(this.posicao.letra + i, this.posicao.numero + i));
            posicoes.push(new Posicao(this.posicao.letra - i, this.posicao.numero + i));
        }

        for (let i = 8; i >= 0; i--) {
            posicoes.push(new Posicao(this.posicao.letra + i, this.posicao.numero - i));
            posicoes.push(new Posicao(this.posicao.letra - i, this.posicao.numero - i));
        }

        return posicoes;
    }
}