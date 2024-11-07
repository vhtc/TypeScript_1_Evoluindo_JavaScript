import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao> { //lista somente leitura (ReadonlyArray)
        return this._negociacoes
    }
}