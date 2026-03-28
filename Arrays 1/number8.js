function printorderitems() {
    let order = {
  customer: "Fatima",
  items: [
    { product: "Bag", unitPrice: 15000, qty: 2 },
    { product: "Shoes", unitPrice: 22000, qty: 1 },
    { product: "Belt", unitPrice: 5000, qty: 3 }
  ]
};
console.log("Customer:" .customer);
    for (let i = 0; i < order.items.length; i++) {
        let item = order.items[i];
        let totalPrice = item.unitPrice * item.qty;
        console.log(item.product + ": " + totalPrice);
    }
}
printorderitems();