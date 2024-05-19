const score = JSON.parse(localStorage.getItem("score"));
const scoreBord = document.getElementById("score-bord");
const saveButton = document.querySelector(".save");
const emailInput = document.querySelector("input");
const happyRobot = document.querySelector(".happy");
const angryRobot = document.querySelector(".angry");
console.dir(angryRobot);
scoreBord.innerText = score;

const validateEmail = () => {
  const char = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailInput.value;
  if (email === "") {
    alert("Pleas enter your Email");
  } else {
    if (char.test(email)) {
      // alert("Your email is Ok!");
      happyRobot.classList.add("happy2");
      setTimeout(() => {
        happyRobot.style.display = "none";
      }, 5000);
    } else {
      // alert("Your email is not correct");
      angryRobot.classList.add("angry2");
      setTimeout(() => {
        angryRobot.style.display = "none";
      }, 5000);
    }
  }
};
