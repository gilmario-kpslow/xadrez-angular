export class Usuario {
    private id: number;
    private nome: string;
    private email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public exibirDetalhes(): string {
        return `ID: ${this.id}, Nome: ${this.nome}, Email: ${this.email}`;
    }
}