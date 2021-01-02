export class Pessoa {
    private _id: number;
    private _nome: string;
    private _idade: number;
    private _nacionalidade: string;
    private _createdAt: string;
    private _updatedAt: string;

    constructor(nome: string, idade: number, nacionalidade: string, createdAt?: string, updatedAt?: string, id?: number) {
        this._id = id || null;
        this._nome = nome;
        this._idade = idade;
        this._nacionalidade = nacionalidade;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    get nacionalidade() {
        return this._nacionalidade;
    }

    set nacionalidade(nacionalidade: string) {
        this._nacionalidade = nacionalidade;
    }

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    set updatedAt(updatedAt: string) {
        this._updatedAt = updatedAt;
    }
}