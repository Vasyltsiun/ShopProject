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
/*const decrementBtns = document.querySelectorAll(".decrement-button")[0];
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
/*toggleDisableState(newValue); //друге рішення
});*/

/*decrementBtns.addEventListener("click", function () {
  let currentValue = +inputFields.value;
  let newValue = currentValue - 1;
  inputFields.value = newValue;
  /*if (newValue <= 0) {
    decrementBtns.disabled = true;    //перше рішення
  }*/
/*toggleDisableState(newValue); //друге рішення
});*/

//add slick
$(".slider-wrapper").slick({
  adaptiveHeight: true,
  dots: true,
});

//More details (модельне вікно)
let moreDetailsBtns = document.querySelectorAll(".button-details");
let showWindowBlock = document.querySelector(".modal");
let closeButton = document.querySelector(".btn-close");

/*moreDetailsBtns.forEach((btn) =>
btn.addEventListener("click", function () {
showWindowBlock.style.display = "block";*/
// showWindowBlock.classList.add("show");    Yaroslav
//})
//);
/*closeButton.addEventListener("click", function () {
showWindowBlock.style.display = "none";*/
//showWindowBlock.classList.remove("show");   Yaroslav
//});

// Інший варіант (закривати в іншому місці)
function openModal() {
  showWindowBlock.classList.add("show");
}
function closeModal() {
  showWindowBlock.classList.remove("show");
}

moreDetailsBtns.forEach((btn) => btn.addEventListener("click", openModal));
closeButton.addEventListener("click", closeModal);
showWindowBlock.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
  if (showWindowBlock === e.target) {
    closeModal();
  }
  if (e.target === document.querySelector(".form-wrapper h3")) {
    document.querySelector(".form-wrapper h3").style.color = "red";
  }
});

// Функції які беруть дані і виводять їх
/*let audi = {
  model: "A4",
  colod: "black",
  year: "2020",
};
let lexus = {
  model: "ES350",
  colod: "silver",
  year: "2015",
};
let bmw = {
  model: "320",
  colod: "white",
  year: "2019",
};*/
/*function Car(name, model, color, year) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.year = year;

  this.getCarName = function () {
    return this.name + " " + this.model;
  };
}

let audi = new Car("audi", "A4", "black", "2020");
let lexus = new Car("lexus", "320", "silver", "2015");
let bmw = new Car("bmw", "320", "white", "2019");

console.log(audi.getCarName());
console.log(lexus.getCarName());
console.log(bmw.getCarName());*/

//Завдання калькулято
/*function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calc1 = new Calculator(10, 2);
let calc2 = new Calculator(5, 5);
console.log(calc1.sum());
console.log(calc1.mul());

console.log(calc2.sum());
console.log(calc2.mul());*/

// Сounter OOP об'єктно орієнтовний підхід
const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtns, decrementBtns, inputFields) {
  this.domRefs = {
    incrementBtns,
    decrementBtns,
    inputFields,
  };
  this.toggleDisableState = function () {
    const count = this.domRefs.inputFields.value;
    this.domRefs.decrementBtns.disabled = count <= 1;
    this.domRefs.incrementBtns.disabled = count >= 10;
  };
  this.toggleDisableState();

  this.increment = function () {
    let currentValue = +this.domRefs.inputFields.value;
    let newValue = currentValue + 1;
    this.domRefs.inputFields.value = newValue;
    this.toggleDisableState();
  };
  this.decrement = function () {
    let currentValue = +this.domRefs.inputFields.value;
    let newValue = currentValue - 1;
    this.domRefs.inputFields.value = newValue;
    this.toggleDisableState();
  };
  this.domRefs.incrementBtns.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtns.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

let counter1 = new Counter(incrementBtns[0], decrementBtns[0], inputFields[0]);
console.log(counter1);
