const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const scoreBord = document.querySelector(".score-bord");
const saveButton = document.querySelector(".save");
const input = document.querySelector("input");
const happyRobot = document.querySelector(".happy");
const message = document.querySelector("h3");
const showHand = document.querySelector(".hand");
scoreBord.innerText = score;

const validate = (event) => {
  const userName = input.value;

  if (!userName) {
    showHand.classList.add("hand2");
    setTimeout(() => {
      showHand.style.display = "none";
    }, 3000);
  } else {
    if (!score) {
      setInterval(() => {
        scoreBord.classList.add("score-bord2");
      }, 1000);
    } else {
      happyRobot.classList.add("happy2");
      message.classList.add("message2");
      setTimeout(() => {
        happyRobot.style.display = "none";
        message.style.display = "none";
      }, 5000);
      const finalScore = { name: userName, score };
      highScores.push(finalScore);
      highScores.sort((a, b) => b.score - a.score);
      highScores.splice(3);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      localStorage.removeItem("score");
    }
  }
};
saveButton.addEventListener("click", (event) => validate(event));
