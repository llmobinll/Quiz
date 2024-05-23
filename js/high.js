const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const message = document.querySelector("h3");
const roboMessage = document.querySelector("img");
const list = document.querySelector("ol");
if (highScores === []) {
}
const content = highScores.map((score, index) => {
  message.style.display = "none";
  roboMessage.style.display = "none";
  return `
  <li>
    <span>${index + 1}</span>

    <p>${score.name}</p>
    <span>${score.score}</span>

  </li>
`;
});
list.innerHTML = content.join("");
