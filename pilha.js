export function criarPilha(tamanho) {
    return new Array(tamanho)
}


export function inserirPilha(pilha, livro) {
    for (let i = 0; i < pilha.length; i++) {
        if (!pilha[i]) {
            pilha[i] = livro;
            console.log(`${livro.titulo} injetando item na pilha`);
            return;
        }
    }
    console.log("A pilha está cheia.");
}

export function retirarPilha(pilha) {
    for (let i = pilha.length - 1; i >= 0; i--) {
        if (pilha[i]) {
            console.log(`${pilha[i].titulo} removido da nossa pilha`);
            pilha[i] = null;
            return;
        }
    }
    console.log("A pilha está vazia.");
}

export function Existe(pilha, nome) {
    for (let i = 0; i < pilha.length; i++) {
        if (pilha[i] && pilha[i].titulo === nome) {
            console.log(`O livro "${nome}" está na pilha.`);
            return true;
        }
    }
    console.log(`O livro "${nome}" não está na pilha.`);
    return 0;
}
