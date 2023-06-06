const leia = require("prompt-sync")()




let nome = leia("Digite o seu nome: ")

let anoNascimento = parseInt(leia("Digite o ano em que você nasceu: "))

let idade = parseFloat(leia("Digite a sua idade: "))




idade = 2023 - anoNascimento




if(idade<=3){

    console.log(" Não atendemos bebes.")

}

else if(idade>3 && idade<=13){

    console.log(nome + " faixa infantil")

}

else if(idade>13 && idade<=17){

    console.log(nome +  " faixa adolescente")

}

else if(idade>17 && idade<=65){

    console.log(nome +  " faixa adulto")

}

else{

    console.log(" Não atendemos idosos.")

}