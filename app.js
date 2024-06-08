let productCountElement = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".button-add");

console.log(productCountElement);
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    debugger;
    let qty = productCountElement.innerHTML;
    productCountElement.innerHTML = ++qty;
  })
);
