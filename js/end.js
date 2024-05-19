const score = JSON.parse(localStorage.getItem("score"));
const scoreBord = document.getElementById("score-bord");
const saveButton = document.querySelector(".save");
const emailInput = document.querySelector("input");
console.dir(emailInput);
scoreBord.innerText = score;

const validateEmail = () => {
  const char = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailInput.value;
  if (email === "") {
    alert("Pleas enter your Email");
  } else {
    if (char.test(email)) {
      alert("Your email is Ok!");
    } else {
      alert("Your email is not correct");
    }
  }
};
