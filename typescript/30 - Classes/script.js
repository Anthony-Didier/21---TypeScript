var Invoice = /** @class */ (function () {
    function Invoice(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
    return Invoice;
}());
var invoice1 = new Invoice("Anthony", "Template", 45);
console.log(invoice1);
console.log(typeof invoice1); // object
console.log(invoice1.client);
var invoice2 = {
    client: "Tony",
    product: "SEO",
    price: 200
}; // TypeScript OK
console.log(invoice2);
