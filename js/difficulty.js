const button = document.querySelectorAll("button");
const selectHandler = (event) => {
  const level = event.target.innerText.toLowerCase();
  localStorage.setItem("level", level);
  window.location.assign("../index/index.html");
};

button.forEach((button) => button.addEventListener("click", selectHandler));
