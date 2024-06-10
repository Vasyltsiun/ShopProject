let productCountElement = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".button-add");

/*console.log(productCountElement);*/
console.log(addToCartBtns);
addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    let qty = productCountElement.innerHTML;
    productCountElement.innerHTML = ++qty;
    /*productCountElement.textContent = +productCountElement.textContent + 1; // рішення Ярослава*/
  })
);

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
    btn.classList.toggle("liked"); // Рішення від Ярослава
  })
);

//change qty
const decrementBtns = document.querySelectorAll(".decrement-button")[0];
const incrementBtns = document.querySelectorAll(".increment-button")[0];
const inputFields = document.querySelectorAll(".product-quantity input")[0];
console.log(decrementBtns);
console.log(incrementBtns);
console.log(inputFields);

let currentValue = +inputFields.value;
toggleDisableState(currentValue);

function toggleDisableState(count) {
  decrementBtns.disabled = count <= 1;
  incrementBtns.disabled = count >= 5;
}

incrementBtns.addEventListener("click", function () {
  let currentValue = +inputFields.value;
  let newValue = currentValue + 1;
  inputFields.value = newValue;
  /*if (newValue > 0) {
    decrementBtns.disabled = false;    //перше рішення
  }*/
  toggleDisableState(newValue); //друге рішення
});

decrementBtns.addEventListener("click", function () {
  let currentValue = +inputFields.value;
  let newValue = currentValue - 1;
  inputFields.value = newValue;
  /*if (newValue <= 0) {
    decrementBtns.disabled = true;    //перше рішення
  }*/
  toggleDisableState(newValue); //друге рішення
});

//add slick
$(".slider-wrapper").slick({
  adaptiveHeight: true,
  dots: true,
});

//More details (модельне вікно)
let moreDetailsBtns = document.querySelectorAll(".button-details");
