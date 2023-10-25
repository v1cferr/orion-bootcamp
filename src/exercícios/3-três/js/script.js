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
function retornarNome(id) {
    const pessoa = listaDePessoas.find((pessoa) => pessoa.id === id);
    return pessoa ? pessoa.name : undefined;
}
const inputIdNome = document.getElementById("ex2__input-name");
const buttonNome = document.getElementById("ex2__button-name");
const textareaNome = document.getElementById("ex2__textarea-name");
buttonNome.addEventListener("click", () => {
    const id = Number(inputIdNome.value);
    const name = retornarNome(id);
    if (name) {
        textareaNome.value = name;
    }
    else {
        textareaNome.value = `Pessoa com o ID ${id} não encontrada.`;
    }
});
// ************************************************************ //
function apagarPessoa(id) {
    const pessoa = listaDePessoas.find((pessoa) => pessoa.id === id);
    if (pessoa) {
        listaDePessoas.splice(listaDePessoas.indexOf(pessoa), 1);
        alert(`Pessoa com ID ${id} apagada com sucesso!`);
    }
}
const inputIdDeletar = document.getElementById("ex2__input-delete");
const buttonDeletar = document.getElementById("ex2__button-delete");
buttonDeletar.addEventListener("click", () => {
    const id = Number(inputIdDeletar.value);
    apagarPessoa(id);
    atualizarTabela();
});
// ************************************************************ //
function alterarBioOuNome(id, name, bio) {
    const pessoa = listaDePessoas.find((pessoa) => pessoa.id === id);
    if (pessoa) {
        if (name) {
            pessoa.name = name;
        }
        else {
            alert("O nome não pode estar em branco.");
        }
        if (bio) {
            pessoa.bio = bio;
        }
        else {
            alert("A biografia não pode estar em branco.");
        }
    }
    else {
        alert(`Pessoa com o ID ${id} não encontrada.`);
    }
    atualizarTabela();
}
const inputIdAlterar = document.getElementById("ex2__input-alterar-id");
const inputNameAlterar = document.getElementById("ex2__input-alterar-name");
const inputBioAlterar = document.getElementById("ex2__input-alterar-bio");
const buttonAlterar = document.getElementById("ex2__button-alterar");
buttonAlterar.addEventListener("click", () => {
    const id = Number(inputIdAlterar.value);
    const name = inputNameAlterar.value;
    const bio = inputBioAlterar.value;
    alterarBioOuNome(id, name, bio);
});
