import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(Date(), 10, 100)

console.log(negociacao.volume)