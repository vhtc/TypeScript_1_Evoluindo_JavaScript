export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data
    //     this._quantidade = quantidade
    //     this._valor = valor
    // }

    // constructor(private _data: Date, private _quantidade: number, private _valor: number){} //faz a mesma coisa que o codigo comentado acima, porem mais limpo

    // constructor(public readonly data: Date, public readonly quantidade: number, public readonly valor: number) { } //faz a mesma coisa que o codigo comentado acima, porem mais limpo

    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number) { } //faz a mesma coisa que o codigo comentado acima, porem mais limpo

    // get data(): Date {
    //     return this._data
    // }

    // get quantidade(): number {
    //     return this._quantidade
    // }

    // get valor(): number {
    //     return this._valor
    // }

    get volume(): number {
        // return this._quantidade * this._valor
        return this.quantidade * this.valor

    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }
}