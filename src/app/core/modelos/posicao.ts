import { LETRAS, NUMEROS } from "./constantes";


export class Posicao {

    constructor(public letra: number, public numero: number) { }

    getId() {
        return `${LETRAS[this.letra]}-${NUMEROS[this.numero]}`
    }

}