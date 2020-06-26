let slideBtn = document.querySelector(".slides__button");
let slides = document.querySelectorAll(".slides .slide");
let figure = document.querySelector(".triangle");
let i = 0;
let j = 2;
figure.classList.add("gotei1");
let item;
slideBtn.onclick = function () {
  item = figure.classList.item(1);
  slides[i].classList.remove("op");
  i++;
  if (i == 3) {
    i = 0;
  }
  slides[i].classList.add("op");

  figure.classList.remove(item);
  go("gotei" + j);
  j++;
  if (j == 4) {
    j = 1;
  }
};

function go(elem) {
  figure.classList.add(elem);
  console.log(1);
}
