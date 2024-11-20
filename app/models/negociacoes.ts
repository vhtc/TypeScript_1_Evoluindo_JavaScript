import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private _negociacoes: Array<Negociacao> = []
    private _negociacoes: Negociacao[] = [] //mesmo codigo que o de cima, mais simples de fazer

    adiciona(negociacao: Negociacao) {
        this._negociacoes.push(negociacao)
    }

    // lista(): ReadonlyArray<Negociacao> { //lista somente leitura (ReadonlyArray)
    //     return this._negociacoes
    // }

    lista(): readonly Negociacao[]{ //mesmo codigo de cima, mais facil
        return this._negociacoes
    }
}