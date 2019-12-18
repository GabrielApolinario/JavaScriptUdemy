/* Se for necessário zerar o valor de algum atributo, utilizar NULL e não undefined*/

let valor // Apesar de declarada, não inicializada, pois não recebeu nenhum tipo de valor
console.log(valor) //Retornará Undefined devido a isso

valor = null // Ausência de valor ou seja, não está apontando para nenhum lugar
console.log(valor) //Retornará null


const produto = {} //Instancia de objeto

produto.nome = "Caixa" //Criação de atributo
console.log(produto.nome)

delete produto.nome //Apagar um atributo de um objeto
console.log(produto)

produto.acessarPropriedades = null 
console.log(produto.acessarPropriedades.toString()) //Não é possível acessar propriedade de nada que está null ou undefined