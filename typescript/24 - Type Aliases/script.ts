// Union Types
type NumStr = number | string;
type ObjIDUser = { id: number; userName: NumStr };
type ObjInvoice = { name: string; price: number };

let data: NumStr;
let userId: NumStr;

data = "Hello";
data = 200;

const welcome = (userName: NumStr) => {
  console.log("Bienvenue", userName);
};
welcome("Anthony");

const getProfileData = (user: ObjIDUser) => {
  console.log(`id: ${user.id}
userName: ${user.userName}`);
};
getProfileData({ id: 232343, userName: "Anthony" });

const invoice = (productName: ObjInvoice, user: ObjIDUser) => {
  console.log(`Produit : ${productName.name}
Prix : ${productName.price} €
ID Client : ${user.id}
Nom du client : ${user.userName}`);
};

let productDetails = {
  name: "Formation TS",
  price: 99
};
invoice(productDetails, { id: 232343, userName: "Anthony" });
