function printtotalitems() {
    let products = [
  { name: "Rice", price: 3000, quantity: 50 },
  { name: "Beans", price: 1800, quantity: 30 },
  { name: "Oil", price: 2500, quantity: 20 }
];
for (let i = 0; i < products.length; i++) {
    let totalItems = products[i].price * products[i].quantity;
    let totalitems = products[i].price * products[i].quantity;

    console.log(totalitems);
}

}

printtotalitems();