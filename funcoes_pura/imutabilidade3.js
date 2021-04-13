const pessoa = {
    nome: `Maria`,
    altura: 1.76,
    cidade: `São Paulo`
}

//Passagem por Referência

function alteraPessoa(novaPessoa){
    novaPessoa.nome = `João`
    novaPessoa.cidade = `Fortaleza`
}

//Atribuição por Referência
const novaPessoa = pessoa

pessoa.nome = `João`
pessoa.cidade = `Fortaleza`

console.log(pessoa)


// Atribuição por valor(copia)!

let a = 3
let b = a

a++
b--

console.log(a, b)