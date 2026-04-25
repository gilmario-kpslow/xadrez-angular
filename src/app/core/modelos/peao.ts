import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import { Peca } from "./peca";
import { Posicao } from "./posicao";

export class Peao extends Peca {

    constructor(posicao: Posicao, cor: 'brancas' | 'pretas', selecionado: boolean) {
        super('peao', posicao, cor, selecionado, faChessPawn);
    }

    override movimentos(): Posicao[] {

        if (this.cor == 'brancas') {
            if (this.posicao.numero >= 7) {
                return [];
            }

            const posicoes: Posicao[] = [];
            posicoes.push(new Posicao(this.posicao.letra, this.posicao.numero + 1));
            posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero + 1));
            posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero + 1));
            if (this.posicao.numero == 1) {
                posicoes.push(new Posicao(this.posicao.letra, this.posicao.numero + 2));
            }
            return posicoes;
        }

        if (this.posicao.numero <= 0) {
            return [];
        }
        const posicoes: Posicao[] = [];
        posicoes.push(new Posicao(this.posicao.letra, this.posicao.numero - 1));
        if (this.posicao.numero == 6) {
            posicoes.push(new Posicao(this.posicao.letra, this.posicao.numero - 2));
        }
        posicoes.push(new Posicao(this.posicao.letra + 1, this.posicao.numero - 1));
        posicoes.push(new Posicao(this.posicao.letra - 1, this.posicao.numero - 1));
        return posicoes;
    }
}