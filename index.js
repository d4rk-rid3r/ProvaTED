import { criarPilha, inserirPilha, retirarPilha, Existe } from './pilha.js';

let livros = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
];

let pilha = criarPilha(livros.length);

console.log("-------------------------------------------------------------")
for (let livro of livros) {
    inserirPilha(pilha, livro);
}
console.log("-------------------------------------------------------------")
for (let i = pilha.length - 1; i >= 0; i--) {
    retirarPilha(pilha);
}
console.log("-------------------------------------------------------------")
Existe(pilha, "Dom Casmurro");
Existe(pilha, "IT a coisa");
console.log("-------------------------------------------------------------")
