// Diz-se que uma linguagem de programação possui
//funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra variável.

const x = 3
const y = function(text){
   return `Esse é o texto: ${text}`
}

console.log(x)
console.log(y(`Olá`))

// ou
const z = () => console.log(`ZzzzzZ!`)

z()