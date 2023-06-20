const leia = require("prompt-sync")()




let matricula =["MAT01","MAT02","MAT03","MAT04"]

let alunos =["Marcos","Pedro","Maria","Paulo"]

let notas =[0,0,0,0]




console.log("MAT\talunos\tnotas")

for(let i=0; i<matricula.length; i++){

    console.log(matricula[i]+'\t'+alunos[i]+'\t'+notas[i])

}

console.log("Digitação de valores")

for(let i=0; i<matricula.length; i++){

    console.log(matricula[i]+'\t'+alunos[i])

    notas[i] = leia("Digite o valor do produto : ")

}

console.log("Cod\tProduto\tPreços")

for(let i=0; i<matricula.length; i++){

    console.log(matricula[i]+'\t'+aluno[i]+'\t'+notas[i])

}

console.log("Cod\tProduto\tPreços")

for(let i=0; i<codigos.length; i++){

    console.log(codigos[i]+'\t'+produtos[i]+'\t'+precos[i])

}

console.log("Alteração de Dados")

let codigo = leia("Digite o codigo do produto que deseja troca o nome : ")

console.log("Cod\tProduto\tPreços")

for(let i=0; i<codigos.length; i++){

    if(codigo == codigos[i])

    console.log("nome atual do Produto"+produtos[1])

    produtos[i] = leia ("Digite o novo nome ")

}