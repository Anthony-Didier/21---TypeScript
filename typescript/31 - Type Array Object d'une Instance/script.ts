class Invoice {
  client: string;
  product: string;
  price: number;

  constructor(client: string, product: string, price: number) {
    this.client = client;
    this.product = product;
    this.price = price;
  }
}

const invoice1 = new Invoice("Anthony", "Template", 45);
const invoice2 = new Invoice("Tony", "SEO", 200);

let invoiceArray: Invoice[] = [];
invoiceArray.push(invoice2, invoice1);
console.log(invoiceArray);
