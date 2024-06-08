let productCountElement = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".button-add");

console.log(productCountElement);
console.log(addToCartBtns);
addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    let qty = productCountElement.innerHTML;
    productCountElement.innerHTML = ++qty;
  })
);

let likeButtons = document.querySelectorAll(".like");
likeButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.classList.contains("liked")) {
      btn.classList.remove("liked");
    } else {
      btn.classList.add("liked");
    }
  })
);
