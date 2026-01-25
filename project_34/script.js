const questions = [
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: 1
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    answer: 0
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "**"],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const scoreText = document.getElementById("score");
const bestScoreText = document.getElementById("bestScore");

loadQuestion();

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;

  optionButtons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.background = "#243b55";
  });

  nextBtn.style.display = "none";
  selected = null;
}

function selectAnswer(index) {
  selected = index;

  optionButtons.forEach(btn => btn.style.background = "#243b55");
  optionButtons[index].style.background = "#4CAF50";

  nextBtn.style.display = "block";
}

function nextQuestion() {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  nextBtn.style.display = "none";
  resultBox.classList.remove("hidden");

  scoreText.innerText = score + " / " + questions.length;

  const bestScore = localStorage.getItem("bestScore") || 0;
  if (score > bestScore) {
    localStorage.setItem("bestScore", score);
  }

  bestScoreText.innerText =
    "Best Score: " + localStorage.getItem("bestScore");
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz").style.display = "block";
  resultBox.classList.add("hidden");
  loadQuestion();
}
