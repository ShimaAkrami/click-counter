console.log("started my project...");

const toggleBtn = document.querySelector(".dark-toggle-btn");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

const count = document.getElementById("count");

let countget = parseInt(count.textContent);

const increaseBtn = document.getElementById("increment");

const decreaseBtn = document.getElementById("decrement");

const resetBtn = document.getElementById("reset");

let savedCount = localStorage.getItem("clickCount");

if (savedCount !== null) {
 countget=parseInt(savedCount);
} else {
  countget = 0;
}
count.textContent=countget;

increaseBtn.addEventListener("click", () => {
  countget = countget + 1;
  count.textContent = countget;

  localStorage.setItem("clickCount", countget);
});

decreaseBtn.addEventListener("click", () => {
  countget = countget - 1;
  count.textContent = countget;

  localStorage.setItem("clickCount", countget);
});

resetBtn.addEventListener("click", () => {
  countget = 0;
  count.textContent = countget;

  localStorage.setItem("clickCount", countget);
});
