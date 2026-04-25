import { Injectable, signal } from "@angular/core";
import { CampoComponent } from "../../componentes/campo/campo";
import { Jogador } from "../modelos/jogador";
import { Movimento } from "../modelos/movimento";
import { Posicao } from "../modelos/posicao";
import { Peca } from "../modelos/peca";
import { PECAS_JOGADOR, PECAS_JOGADOR_ADVERSARIO } from "../modelos/constantes";

@Injectable({ providedIn: 'root' })
export class JogoControle {

    private jogadorBrancas?: Jogador;
    private jogadorPretas?: Jogador;
    private jogadorAtual?: Jogador;
    private movimentos: Movimento[] = [];
    private campos: CampoComponent[] = [];
    pecas = signal<Peca[]>([]);


    iniciarJogo() {
        this.jogadorBrancas = new Jogador('Jogador Brancas', 'brancas');
        this.jogadorPretas = new Jogador('Jogador Pretas', 'pretas');
        this.jogadorAtual = this.jogadorBrancas;

        this.pecas.update(() => {
            const pecas = PECAS_JOGADOR('brancas');

            const pretas = PECAS_JOGADOR_ADVERSARIO('pretas');
            pretas.forEach(a => pecas.push(a));


            return pecas;
        });

        console.log(this.pecas);


    }

    executarMovimento(origem: Posicao, destino: Posicao) {
        // Verificar Chech ou Check mate
        // Verificar movimento possivel
        // Verificar se está jogando a peça correta




    }

    // pecas(): Peca[] {
    //     return this._pecas();
    // }

}