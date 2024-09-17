const count = document.getElementById("count");
const counter = document.getElementById("counter-container");

const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");

let currentCount = Number(count.innerText);
increaseBtn.addEventListener("click", function (event) {
  currentCount++;
  count.innerText = currentCount;
  event.stopPropagation();
});
decreaseBtn.addEventListener("click", function (event) {
  currentCount--;
  count.innerText = currentCount;
  event.stopPropagation();
});
counter.addEventListener("click", function () {
  console.log(increaseBtn.getAttribute("disabled"));

  if (increaseBtn.getAttribute("disabled") === null) {
    counter.classList.add("bg-red-500");
    increaseBtn.setAttribute("disabled", true);
    decreaseBtn.setAttribute("disabled", true);
  } else {
    counter.classList.remove("bg-red-500");
    increaseBtn.removeAttribute("disabled");
    decreaseBtn.removeAttribute("disabled");
  }
});
