//Uma função pura é uma função em que o valor
//de retorno é determinado APENAS por seus valores
//de entrada, sem efeitos colaterais obseváveis 

//const PI = 3.14

// impura - PI é un valor externo!
function areaCirc(raio) {
    return raio * raio * Math.PI //estável 
}
    
console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))


// pura 
function areaCircPura(raio, PI) {
    return raio * raio * PI
}

console.log( areaCircPura(10, 3.14))
console.log( areaCircPura(10, 3.141592))
console.log( areaCircPura(10, Math.PI))