const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const scoreBord = document.getElementById("score-bord");
const saveButton = document.querySelector(".save");
const input = document.querySelector("input");
const happyRobot = document.querySelector(".happy");
const showHand = document.querySelector(".hand");
const typingText = document.getElementById("typing-text");
const text = "Your username and score saved successfully";
console.dir(input);
scoreBord.innerText = score;

const validate = (event) => {
  const userName = input.value;

  if (!userName || !score) {
    showHand.classList.add("hand2");
    setTimeout(() => {
      showHand.style.display = "none";
    }, 3000);
  } else {
    happyRobot.classList.add("happy2");
    setTimeout(() => {
      happyRobot.style.display = "none";
    }, 5000);
    const finalScore = { name: userName, score };
    highScores.push(finalScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("score");
    highScores.splice(5);
  }
};
saveButton.addEventListener("click", (event) => validate(event));

const typeWriter = (text, i, typingText) => {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i, typingText), 100);
  }
};
typeWriter(text, 0, typingText);
