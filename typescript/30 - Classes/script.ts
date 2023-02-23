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
console.log(invoice1);
console.log(typeof invoice1); // object
console.log(invoice1.client);

const invoice2: Invoice = {
  client: "Tony",
  product: "SEO",
  price: 200
}; // TypeScript OK
console.log(invoice2);
