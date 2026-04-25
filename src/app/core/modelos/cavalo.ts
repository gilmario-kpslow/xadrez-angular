import { faChessKnight, faChessPawn, faChessRook } from "@fortawesome/free-solid-svg-icons";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export class Cavalo extends Peca {

    constructor(posicao: Posicao, cor: 'brancas' | 'pretas', selecionado: boolean) {
        super('cavalo', posicao, cor, selecionado, faChessKnight);
    }

    override movimentos(): Posicao[] {
        const posicoes: Posicao[] = [];

        posicoes.push(new Posicao(this.posicao.letra + 2, this.posicao.numero + 1));
        posicoes.push(new Posicao(this.posicao.letra + 2, this.posicao.numero - 1));

        posicoes.push(new Posicao(this.posicao.letra - 2, this.posicao.numero + 1));
        posicoes.push(new Posicao(this.posicao.letra - 2, this.posicao.numero - 1));


        posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero + 2));
        posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero + 2));

        posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero - 2));
        posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero - 2));

        return posicoes;
    }
}