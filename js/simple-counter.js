const count = document.getElementById('count');

let currentCount = Number(count.innerText);
function increaseCount(){
  currentCount++;
  count.innerText = currentCount;
}
function decreaseCount(){
  currentCount--;
  count.innerText = currentCount;
}