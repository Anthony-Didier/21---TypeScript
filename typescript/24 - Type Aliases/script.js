var data;
var userId;
data = "Hello";
data = 200;
var welcome = function (userName) {
    console.log("Bienvenue", userName);
};
welcome("Anthony");
var getProfileData = function (user) {
    console.log("id: ".concat(user.id, "\nuserName: ").concat(user.userName));
};
getProfileData({ id: 232343, userName: "Anthony" });
var invoice = function (productName, user) {
    console.log("Produit : ".concat(productName.name, "\nPrix : ").concat(productName.price, " \u20AC\nID Client : ").concat(user.id, "\nNom du client : ").concat(user.userName));
};
var productDetails = {
    name: "Formation TS",
    price: 99
};
invoice(productDetails, { id: 232343, userName: "Anthony" });
