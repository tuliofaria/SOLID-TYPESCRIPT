// create interface first!!
// connect about both type of class

interface Book {
    nomebook: string;
    ibm: number;
    quantidade: number;
    sumbook: number;
    }
    
interface SALE {
      pesquisa: string;
      update: string;
    }
    
interface FinnalySale {
    value:number ;
    print: string;
    }

// create class uses guidance about SRP (SINGLE RESPONSIBILITY PRINCIPLE)
class Libraries implements Book {  
    nomebook: string;
    ibm: number;
    quantidade: number;
    sumbook: number ;

    constructor(nomebook:string, ibm: number, quantidade: number, sumbook: number){
       this.nomebook = nomebook ,
       this.ibm = ibm,
       this.quantidade = quantidade,
       this.sumbook = sumbook
    }
}

class Organizesale implements SALE {
    pesquisa: string ;
    update: string ;

    constructor(pesquisa: string, update: string){
         this.pesquisa = pesquisa ,
         this.update = update
    }
}

class Salefinal implements FinnalySale {
    value:number ;
    print: string;
    
    constructor(value:number, print: string){
         this.value = this.value,
         this.print = print
    }
}

class ReceiveSale {
    constructor(){
        this
    }     
}



















let caught: Libraries 
caught = new Libraries('recipe about spice up meal',32321312 ,2,10);

let survey: Organizesale
survey = new Organizesale('Rearrange your brain','introducao a python');

let together : Salefinal
together = new Salefinal(100, 'show invoice')