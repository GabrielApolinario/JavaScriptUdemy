                                                    /* Curiosidade sobre JavaScript */

/* Quando utilizado VAR, acontece o hoisting, que seria um içamento, 
ou seja, você consegue utilizar a variavel antes mesmo de ela ter sido declarada
no caso, ela retornará 'undefined', porém não apresentará erros de compilação  */

console.log(a)
var a = 2
console.log(a)

/* Quando utilizado o Let, o mesmo não acontecerá, e será retornado um erro */

console.log(a)
let a = 2
console.log(a)