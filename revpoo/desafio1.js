const leia = require("prompt-sync")()

//arrays e vetores
let alunos = ['juan','tony','rodrigo','vitin']

let notas = [0,0,0,0]

for(let x=0;x<alunos.length;x++){

    console.log(alunos[x])

    notas[x] = parseInt(leia("Digite a nota deste aluno: "))
}
console.log("boletim")

console.log("ALUNO\tNOTA")

for(let x=0;x<=alunos.length;x++){

    console.log(alunos[x]+'\t'+notas[x])
}