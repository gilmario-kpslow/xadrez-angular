import { faChessKing, faChessPawn, faChessQueen } from "@fortawesome/free-solid-svg-icons";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export class Rainha extends Peca {

    constructor(posicao: Posicao, cor: 'brancas' | 'pretas', selecionado: boolean) {
        super('rainha', posicao, cor, selecionado, faChessQueen);
    }

    override movimentos(): Posicao[] {
        const posicoes: Posicao[] = [];

        for (let i = 0; i < 8; i++) {
            posicoes.push(new Posicao(this.posicao.letra, 0 + i));
            posicoes.push(new Posicao(0 + i, this.posicao.numero));
        }
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