import { faChessKing, faChessPawn } from "@fortawesome/free-solid-svg-icons";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export class Rei extends Peca {

    constructor(posicao: Posicao, cor: 'brancas' | 'pretas', selecionado: boolean) {
        super('rei', posicao, cor, selecionado, faChessKing);
    }

    override movimentos(): Posicao[] {
        const posicoes: Posicao[] = [];

        posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero));
        posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero));

        posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero + 1));
        posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero + 1));

        posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero - 1));
        posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero - 1));

        posicoes.push(new Posicao(this.posicao.letra, this.posicao.numero - 1));
        posicoes.push(new Posicao(this.posicao.letra, this.posicao.numero + 1));
        return posicoes;
    }
}