const leia =  require("prompt-sync")()

// Leia o nome do usuario
// Leia o salario do usuario
// Se o salario for menor que 2500 a pessoa é isenta
// Se o salario for acima de  2500 e menor que 500
// paga imposto de 15% - mostrar imposto e salario liquido
// se o salario for acima de 500 paga imposto de 25%
//MOSTRAR SALARIO LIQUIDO E IMPOSTO PAGA

//variaveis
let usuario
let salario
let valorImposto

//entradas
usuario = leia("digite o nome do usuario : ")
salario = parseFloat(leia("digite o valor do salario : "))

if(salario <= 2500){
    console.log(usuario + " voce é isento!!!")
}
else if(salario > 2500 && salario <= 5000){
    valorImposto = salario * 0.15
    console.log("Oi sr."+usuario+" seu imposto é "+valorImposto)
    console.log("seu salario liquido é "+(salario-valorImposto))
}
else{
        valorImposto = salario * 0.25
    console.log("Oi sr."+usuario+" seu imposto é "+valorImposto)
    console.log("seu salario liquido é "+(salario-valorImposto))
}

 //fim do programa
 console.log("fim do programa")

