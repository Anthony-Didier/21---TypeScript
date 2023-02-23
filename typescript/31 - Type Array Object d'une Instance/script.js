var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice("Anthony", "Template", 45);
var invoice2 = new Invoice("Tony", "SEO", 200);
var invoiceArray = [];
invoiceArray.push(invoice2, invoice1);
console.log(invoiceArray);
