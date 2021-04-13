//Functors são objetos que implementam a função MAP
//que també é um "wrapper" de um valor

//Array é um exemplo de Functors
const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums
.map(el => el + 10)
 .map(el => el * 2)

console.log(nums, novosNums)

function TipoSeguro(valor){
        return {
            valor,
            map (fn){
                const novoValor = fn(this.valor)
                return TipoSeguro(fn(this.valor))
            }
        }
}

const resultado = TipoSeguro('Esse é um texto')
.map(t => t.toUpperCase())
.map(t =>  `${t}!!!`)
.map(t => t.split('').join(' '))


console.log(resultado.Valor)