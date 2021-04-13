//Uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efeitos colaterais obseváveis 

// Função impura

let qtdDeExecucoes = 0

function somar(a, b){
    qtdDeExecucoes++ //efeitos colaterais observáveis
    return a + b
}

console.log(qtdDeExecucoes)
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(qtdDeExecucoes)


// Função Pura

function somar(a, b){
    return a + b
}

console.log(somar(68, 31))
console.log(somar(68, 31))
console.log(somar(68, 31))