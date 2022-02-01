//Guidance about SRP (SINGLE RESPONSIBILITY PRINCIPLE)
var Libraries = /** @class */ (function () {
    function Libraries(nomebook) {
        this.nomebook = nomebook;
    }
    return Libraries;
}());
var Pricebook = /** @class */ (function () {
    function Pricebook(pricebook) {
        this.pricebook = pricebook;
    }
    return Pricebook;
}());
var Finnaly = /** @class */ (function () {
    function Finnaly(bookone) {
        this.bookone = bookone;
    }
    return Finnaly;
}());
//get interface and adding values of book
var Invoices = { valuebook: 99.90, namebook: 'learning Mysql' };
var fun1 = new Libraries('Learning Mysql');
var prec = new Pricebook(99.90);
var finasale = new Finnaly(99.90);
