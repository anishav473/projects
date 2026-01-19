const products = [
  { name: "Wireless Headphones", price: 1999, qty: 1 },
  { name: "Smart Watch", price: 2999, qty: 1 }
];

function changeQty(index, value) {
  products[index].qty += value;
  if (products[index].qty < 1) products[index].qty = 1;

  document.getElementById("qty" + index).innerText =
    products[index].qty;
}

function addToCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    product: products[index].name,
    quantity: products[index].qty,
    total: products[index].qty * products[index].price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  document.getElementById("message").innerText =
    products[index].name + " added to cart!";
}
