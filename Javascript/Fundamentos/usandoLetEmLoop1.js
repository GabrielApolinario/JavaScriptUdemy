/* Quando declarado com LET, a variavel não tem escopo global e sim apenas onde foi declarada */

for (let i = 0; i < 10; i++){
    console.log(i)
}

//Ocorrerá um erro caso tente imprimir a variavel i, já que ela só foi declarada dentro de um bloco

console.log(i)
