import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Posicao } from "./posicao";

export abstract class Peca {

    constructor(public nome: string, public posicao: Posicao, public cor: 'brancas' | 'pretas', public selecionado: boolean, public icone: IconDefinition) { }

    abstract movimentos(): Posicao[];

    mover(posicao: Posicao) {
        this.posicao = posicao;
    }

}