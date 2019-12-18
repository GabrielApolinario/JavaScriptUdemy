// Armezenando função dentro de uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)


//Armazenando uma função arrow em uma variavel

const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 5))


//Retorno implicito
/* Quando uma função não recebe o 'corpo' {} 
significa que só executará uma sentença dentro dela e automaticamente irá ter retorno*/

const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))