//classes




class Contas{
 constructor(numero,cpf,saldo,ativo){
     this.numero = numero;
     this.cpf = cpf;
     this.saldo = saldo;
     this.ativo = ativo
     }
    
    
    
     ativar(){
     this.ativo= true;
     }
    
    
    
     credito(valor){
     if(this.ativo){
     if(valor<0){
     console.log("Impossivel realizar, valor negativo")
     }
     else if(valor==0){
     console.log("Impossivel realizar, valor zerado...")
     }
     else {
     this.saldo+=valor
     }
     }
     else{
     console.log("Conta inativa")
     }
     }
    
    
    
     Debito(valor){
     if (this.ativo){
     if(valor<0){
     console.log("Impossivel realizar, valor negativo...")
    }
    else if(valor ==0){
console.log("Impossivel realizar, valor zerado...")
}
else if( valor>=this.saldo){
 console.log("Impossivel realizar, saldo indisponivel..")
}
else {
 this.saldo -=valor
}
 }

 else {
 console.log("Conta inativa.....")
 }

     }
    
    }
    
    
    
    
    // Sua sub-Classe
    
    
    
    
    class Corrente extends Contas{
     constructor(numero,cpf,saldo,ativo, ContadorTalao){
 super(numero,cpf,saldo,ativo);
 this.ContadorTalao = ContadorTalao;
     }
    
    
    
    
     solicitarCheque() {
 if (this.ContadorTalao <= 3) {
 this.saldo -= 30.0;
 this.ContadorTalao++;
 console.log("Cheque solicitado com sucesso.");
 } else {
 console.log("Limite máximo de cheques atingido.");
 }
     }
    
    
    
     }
    
    
    
    
    
    // programa principal
    
    
    
    
    const leia = require("prompt-sync")()
    
    let opcao = ""
    
    
    
    
    
    // montando o menu
    
    
    
     do{
     console.log("")
     console.log("1 - conta poupança")
     console.log("2 - conta corrente")
     console.log("3 - conta Especial")
     console.log("4 - conta Estudantil")
     console.log("5- sair ")
     opcao=leia("Digite o número da sua opção : ")
     if (opcao == "1"){
 console.log("Testando conta poupança")
     }
     else if (opcao == "2"){
     console.log("Conta corrente")
     let numero = leia("Digite o numero da conta : ")
     let cpf = leia("Digite o cpf : ")
     // 0 , false , 30
     let corrente1 = new Corrente(numero,cpf, 0 , false, 3);
     let op="";
     let valor = 0;
     corrente1.ativar()
     for (let x=1; x<=10; x++){
     valor = leia("Digite o valor : ")
     op =leia ("Digite D para Debito ou C para Credito : ")
     if (op=="D"){
      corrente1.Debito(valor)
     }else if(op=="C"){
      corrente1.credito(valor)
     }
     console.log("Saldo atual R$ : " +corrente1.saldo)
    }
    console.log("solicitar cheque ?")
    corrente1.ContadorTalao(valor)
    console.log("saldo final : "+corrente1.saldo)
    
    
    
    
     }
     else if (opcao == "3"){
     console.log("Testando conta Especial")
     }
     else if (opcao == "4"){
     console.log("Testando conta Estudantil")
     }
    
    
    
     else if (opcao == "5"){
     console.log("Saindo do programa")
    
    
    
     }
     else{
     console.log("Digitação invalida")
     }
    
    
    
     } while(opcao != "5")
     console.log("Fim de programa volte sempre")
    
    
    
    
    
     // let numero = parseInt(leia("Digite o numero da conta : "))
     // let cpf = leia("Digite o cpf da conta : ")
     // let c1 = new Contas(numero,cpf,0,false)
     // let op=""
     // let valor = 0
     // c1.ativar()
     // for (let x=1; x<=10; x++){
     // console.log("Movimento : " +x)
     // console.log("Saldo atual conta : " +c1.saldo)
     // op = leia("Digite D para debido ou C para crédito : ")
     // if(op=="D"){
     // valor = leia ("Digite o valor para debito ")
     // c1.Debito(valor)
    
    // }
    
    // else if (op== "C"){
    
    // valor = parseInt(leia ("Digite o valor para crédito "))
    
    // c1.credito(valor)
    
    // }
    
    // }
    
    
    
    
    // console.log("Saldo final conta : " +c1.saldo)
    
    
    
    
    // c1.credito(100)
     // console.log("saldo atual " +c1.saldo)