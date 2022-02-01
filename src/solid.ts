//Guidance about  OCP (-open-closed-Principle)
interface Notafiscal{
    valuebook:number;
    namebook: string;
}

//Guidance about SRP (SINGLE RESPONSIBILITY PRINCIPLE)
class Libraries {
    constructor(nomebook:string){
     this.nomebook = nomebook
    }
    nomebook: string;
}

class Pricebook implements Notafiscal {
    valuebook:number;
    namebook: string;
    
    constructor(pricebook:number){
     this.pricebook = pricebook
    }
    pricebook: number;
}

class Finnaly implements Notafiscal {
    valuebook:number;
    namebook: string;

    constructor(bookone: number){
        this.bookone = bookone 
    }
    bookone:number;
}



//get interface and adding values of book
const Invoices: Notafiscal = {valuebook:99.90 , namebook:'learning Mysql'}
let fun1: Libraries = new Libraries('Learning Mysql')
let prec: Pricebook = new Pricebook(99.90)
let finasale: Finnaly = new Finnaly(99.90)