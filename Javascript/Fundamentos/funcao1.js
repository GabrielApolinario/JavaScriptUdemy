/* Função é um bloco de código que pode receber um nome e pode ser reutilizada varias vezes*/
/* Funções também podem ser anonimas, ou seja, não recebem um nome*/

//Função sem retorno
         //Nome da função(parametros){Bloco de execução}
function imprimirSoma(a,b){
    console.log(a + b)
}

//Chamando a função passando 2 e 3 como parametro
imprimirSoma(2, 3)


//Função com retorno
                 /*o segundo parametro está recebendo valor 0, 
                 caso não seja passado nenhum valor quando a função for chamada, ele assumirá 0*/
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 8))