let menuBtn = document.querySelector(".menu-btn");
let lineOne = document.querySelectorAll(".menu-line")[0];
let lineTwo = document.querySelectorAll(".menu-line")[1];
let lineThree = document.querySelectorAll(".menu-line")[2];
menuBtn.addEventListener("click", function() {
    this.classList.toggle("revert");
    lineOne.classList.toggle("spin-top");
    lineTwo.classList.toggle("vanish");
    lineThree.classList.toggle("spin-bot");
});

