import { faChessPawn, faChessRook } from "@fortawesome/free-solid-svg-icons";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export class Torre extends Peca {

    constructor(posicao: Posicao, cor: 'brancas' | 'pretas', selecionado: boolean) {
        super('torre', posicao, cor, selecionado, faChessRook);
    }

    override movimentos(): Posicao[] {
        const posicoes: Posicao[] = [];

        for (let i = 0; i < 8; i++) {
            posicoes.push(new Posicao(this.posicao.letra, 0 + i));
            posicoes.push(new Posicao(0 + i, this.posicao.numero));
        }

        return posicoes;
    }
}