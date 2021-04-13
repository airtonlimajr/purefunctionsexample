const letrasAninhadas = [
['o', 'l', 'a'], 
[''],
['m', 'u', 'n', 'd', 'o'],
['!', '!', '!']

]

const letras = letrasAninhadas.flat(infinity)


const resultado = letras
.flatmap(l => [l, ','])
.reduce(a, b) => a + b)



console.log(resultado)