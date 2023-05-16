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
    
    
    
    
    
    
    // programa principal
    
    
    
    
    const leia = require("prompt-sync")()
    
        let numero = parseInt(leia("Digite o numero da conta : "))
    
        let cpf = leia("Digite o cpf da conta : ")
    
        let c1 = new Contas(numero,cpf,0,false)
    
        let op=""
    
        let valor = 0
    
        c1.ativar()
    
        for (let x=1; x<=10; x++){
    
            console.log("Movimento : " +x)
    
            console.log("Saldo atual conta : " +c1.saldo)
    
            op = leia("Digite D para debido ou C para crédito : ")
    
            if(op=="D"){
    
                valor = leia ("Digite o valor para debito ")
    
                c1.Debito(valor)
    
            }
    
            else if (op== "C"){
    
                valor = parseInt(leia ("Digite o valor para crédito "))
    
                c1.credito(valor)
    
            }
    
        }
    
    
    
    
        console.log("Saldo final conta : " +c1.saldo)
    
    
    
    
        c1.credito(100)
    
        console.log("saldo atual " +c1.saldo)
    