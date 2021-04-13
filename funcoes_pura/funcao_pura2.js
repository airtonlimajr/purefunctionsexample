//função pura ou impura?


//Função impura
function gerarNumeroAleatorio(min, max){
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 100))
console.log(gerarNumeroAleatorio(1, 100))
console.log(gerarNumeroAleatorio(1, 100))
console.log(gerarNumeroAleatorio(1, 100))
console.log(gerarNumeroAleatorio(1, 100))

