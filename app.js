/*let productCountElement = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".button-add");

/*console.log(productCountElement);*/
/*console.log(addToCartBtns);
addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    /*let qty = productCountElement.innerHTML;
    productCountElement.innerHTML = ++qty;*/
/* productCountElement.textContent = +productCountElement.textContent + 1; // рішення Ярослава
  })
);*/

let likeButtons = document.querySelectorAll(".like");
/*for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function () {});
}*/ ////рішення від Ярослава

likeButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    /*if (btn.classList.contains("liked")) {
      btn.classList.remove("liked");
    } else {
      btn.classList.add("liked");
    }*/
    btn.classList.toggle("liked");
  })
);

//change qty
const decrementBtns = document.querySelectorAll(".decrement-button")[0];
const incrementBtns = document.querySelectorAll(".dincrement-button")[0];
const inputFields = document.querySelectorAll(".product-quantity input")[0];
console.log(decrementBtns);
console.log(incrementBtns);
console.log(inputFields);
