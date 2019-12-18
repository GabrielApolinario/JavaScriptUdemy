//Problema histórico do JS com VAR

//Quando utilizado VAR para declarar a variavel, o retorno será errado

const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


//Quando utilizado o LET para declarar a variavel, o retorno é o correto porque a variavel tem escopo de bloco
const funcs2 = []

for (let i = 0; i < 10; i++){
    funcs2.push(function(){
        console.log(i)
    })
}

funcs2[2]()
funcs2[8]()