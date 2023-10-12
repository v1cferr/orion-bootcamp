"use strict";
const lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
// ************************************************************ //
// a) Crie uma função que retorne a bio do id passado.
// a1) Paradigma Funcional
function retornarBioPeloIdFuncional(id) {
    const pessoa = lista.find((pessoa) => pessoa.id === id);
    return pessoa ? pessoa.bio : undefined;
}
console.log(`Retorno da Bio via Paradigma Funcional:
	${retornarBioPeloIdFuncional(3)}`);
// a2) Paradigma Imperativo
function retornarBioPeloIdImperativo(id) {
    for (const pessoa of lista) {
        if (pessoa.id === id) {
            return pessoa.bio;
        }
    }
    return undefined;
}
console.log(`Retorno da Bio via Paradigma Imperativo:
	${retornarBioPeloIdImperativo(3)}`);
// ************************************************************ //
// b) Crie uma função que retorne o name do id passado.
// ************************************************************ //
// c) Crie uma função que apague um item da lista a partir de um id passado.
// ************************************************************ //
// d) Crie uma função que altere a bio ou o name a partir de um id passado.
// ************************************************************ //
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo.
