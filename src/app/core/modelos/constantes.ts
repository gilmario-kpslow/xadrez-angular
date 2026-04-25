import { Bispo } from "./bispo";
import { Cavalo } from "./cavalo";
import { Peao } from "./peao";
import { Peca } from "./peca";
import { Posicao } from "./posicao";
import { Rainha } from "./rainha";
import { Rei } from "./rei";
import { Torre } from "./torre";

export const NUMEROS = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const LETRAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const PECAS = ['peao', 'cavalo', 'torre', 'bispo', 'rainha', 'rei'];
export const POSICOES = (cor: 'brancas' | 'pretas' | undefined) => {
    if (!cor) {
        return [];
    }
    const lista = [];

    if (cor == 'pretas') {

        for (let n = 0; n < 8; n++) {
            const listaP = [];
            for (let l = 7; l >= 0; l--) {
                listaP.push(new Posicao(l, n));
            }
            lista.push(listaP);
        }
    } else {
        for (let n = 7; n >= 0; n--) {
            const listaP = [];
            for (let l = 0; l < 8; l++) {
                listaP.push(new Posicao(l, n));
            }
            lista.push(listaP);
        }
    }
    return lista;
}

export const PECAS_JOGADOR = (cor: 'brancas' | 'pretas') => {

    const pecas: Peca[] = [];

    for (let i = 0; i < 8; i++) {
        const peao = new Peao(new Posicao(i, 1), cor, false);
        pecas.push(peao);
    }

    pecas.push(new Torre(new Posicao(0, 0), cor, false));
    pecas.push(new Torre(new Posicao(7, 0), cor, false));


    pecas.push(new Bispo(new Posicao(1, 0), cor, false));
    pecas.push(new Bispo(new Posicao(6, 0), cor, false));

    pecas.push(new Cavalo(new Posicao(2, 0), cor, false));
    pecas.push(new Cavalo(new Posicao(5, 0), cor, false));

    if (cor == 'brancas') {
        pecas.push(new Rei(new Posicao(4, 0), cor, false));

        pecas.push(new Rainha(new Posicao(3, 0), cor, false));

    } else {
        pecas.push(new Rei(new Posicao(3, 0), cor, false));
        pecas.push(new Rainha(new Posicao(4, 0), cor, false));
    }


    return pecas;
}

export const PECAS_JOGADOR_ADVERSARIO = (cor: 'brancas' | 'pretas') => {
    const pecas: Peca[] = [];

    for (let i = 0; i < 8; i++) {
        const peao = new Peao(new Posicao(i, 6), cor, false);
        pecas.push(peao);
    }

    pecas.push(new Torre(new Posicao(0, 7), cor, false));
    pecas.push(new Torre(new Posicao(7, 7), cor, false));


    pecas.push(new Bispo(new Posicao(1, 7), cor, false));
    pecas.push(new Bispo(new Posicao(6, 7), cor, false));

    pecas.push(new Cavalo(new Posicao(2, 7), cor, false));
    pecas.push(new Cavalo(new Posicao(5, 7), cor, false));

    if (cor == 'brancas') {
        pecas.push(new Rei(new Posicao(4, 7), cor, false));

        pecas.push(new Rainha(new Posicao(3, 7), cor, false));

    } else {
        pecas.push(new Rei(new Posicao(3, 7), cor, false));
        pecas.push(new Rainha(new Posicao(4, 7), cor, false));
    }


    return pecas;
}

