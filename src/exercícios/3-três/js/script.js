"use strict";
const listaDePessoas = [
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
function atualizarTabela() {
    const tabela = document.getElementById("ex2__table");
    const corpoDaTabela = tabela.getElementsByTagName("tbody")[0];
    corpoDaTabela.innerHTML = "";
    for (const pessoa of listaDePessoas) {
        const linha = corpoDaTabela.insertRow();
        const celulaDoId = linha.insertCell(0);
        celulaDoId.textContent = pessoa.id.toString();
        const celulaDoNome = linha.insertCell(1);
        celulaDoNome.textContent = pessoa.name;
        const celulaDaBio = linha.insertCell(2);
        celulaDaBio.textContent = pessoa.bio;
    }
}
atualizarTabela();
// ************************************************************ //
function retornarBiografia(id) {
    const pessoa = listaDePessoas.find((pessoa) => pessoa.id === id);
    return pessoa ? pessoa.bio : undefined;
}
const inputIdBiografia = document.getElementById("ex2__input-bio");
const buttonBiografia = document.getElementById("ex2__button-bio");
const textareaBiografia = document.getElementById("ex2__textarea-bio");
buttonBiografia.addEventListener("click", () => {
    const id = Number(inputIdBiografia.value);
    const bio = retornarBiografia(id);
    if (bio) {
        textareaBiografia.value = bio;
    }
    else {
        textareaBiografia.value = `Pessoa com o ID ${id} não encontrada.`;
    }
});
// ************************************************************ //
