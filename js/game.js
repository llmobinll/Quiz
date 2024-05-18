import formatData from "./helper.js";
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.getElementById("question-text");
const answerList = document.querySelectorAll(".answer-text");
const scoreBord = document.getElementById("score");
const questionNumberBord = document.getElementById("question-num");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");
const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";
let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;
let score = 0;
let isAccepted = true;
const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  console.log(formattedData);
  start();
};

const start = () => {
  showQuestion();

  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fetchData);

const showQuestion = () => {
  questionNumberBord.innerText = questionIndex + 1;

  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  questionText.innerText = question;
  correctAnswer = correctAnswerIndex;
  console.log(correctAnswer);
  answerList.forEach((button, index) => {
    button.innerText = answers[index];
  });
};

const checkAnswer = (event, index) => {
  if (!isAccepted) return;
  isAccepted = false;
  const isCorrect = index === correctAnswer ? true : false;
  if (isCorrect) {
    event.target.classList.add("correct");
    score++;
    scoreBord.innerText = score;
  } else {
    event.target.classList.add("incorrect");
    answerList[correctAnswer].classList.add("correct");
  }
};

const nextHandler = () => {
  questionIndex++;
  if (questionIndex < formattedData.length) {
    isAccepted = true;
    showQuestion();
    removeClasses();
  } else {
    localStorage.setItem("score", JSON.stringify(score));
    window.location.assign("/end.html");
  }
  console.log(questionIndex);
};
const finishHandler = () => {
  localStorage.setItem("score", JSON.stringify(score));
  window.location.assign("/end.html");
};
const removeClasses = () => {
  answerList.forEach((button) => (button.className = "answer-text"));
};
finishButton.addEventListener("click", finishHandler);
nextButton.addEventListener("click", nextHandler);
answerList.forEach((button, index) => {
  button.addEventListener("click", (event) => checkAnswer(event, index));
});
