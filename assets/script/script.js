// An array of questions as objects
const questions = [
  {
    question: "Which of these four is NOT a JavaScript data type?",
    options: ["String", "Float", "Object", "Number"],
    answer: 1 // Index of the correct answer option
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<scripting>"],
    answer: 0
  },
  {
    question: "What is the correct way to write a comment in JavaScript?",
    options: ["'This is a comment'", "//This is a comment", "<!--This is a comment-->", "/*This is a comment*/"],
    answer: 1
  },
  {
    question: "What will console.log(8 + 8) return?",
    options: ["88", "null", "16", "NaN"],
    answer: 2
  },
  {
    question: "Which built-in method returns the length of a string?",
    options: [".size()", ".length()", ".count()", ".length"],
    answer: 1
  },
  {
    question: "What does JSON stand for?",
    options: ["JavaScript Standard Operation Notation", "JavaScript Original Notification", "JavaScript Option Null", "JavaScript Object Notification"],
    answer: 3
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["variable myVar;", "v myVar;", "var myVar;", "myVar = variable;"],
    answer: 2
  },
  {
    question: "Which of the following is an incorrect way to create a variable?",
    options: ["let x = 5", "var x = 5", "const x = 5", "variable x = 5"],
    answer: 3
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "*", "-", "=="],
    answer: 0
  },
  {
    question: "Which function is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "parseString()", "stringToInt()", "intParse()"],
    answer: 0
  }
];

// initial variables declared

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

// access DOM elements

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const scoreDisplay = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitScoreBtn = document.getElementById('submit-score');
const timeDisplay = document.getElementById('time-left');
const highScoresList = document.getElementById('score-list');
const timeShow = document.getElementById('timer');

//hide timer until quiz begins
timeShow.classList.add('hidden')

//Add event listeners to buttons



startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
  currentQuestion++;
  setNextQuestion();;
});

//function to start quiz

function startQuiz() {
  startButton.classList.add('hidden'); //remove start button
  quizContainer.classList.remove('hidden'); //show quiz container
  timeShow.classList.remove('hidden') // show time
  timerInterval = setInterval(updateTimer, 1000); //start timer
  setNextQuestion(); //show first question
}

// display the next question

function setNextQuestion() {
  resetOptions(); //clear options container
  if (currentQuestion < questions.length) {
    showQuestion(questions[currentQuestion]); // check questions array for remaining question.. display current question
  } else {
    finishQuiz(); // end quiz if no questions remain
  }
}

// Function to display a single question
function showQuestion(question) {
  document.getElementById('question').innerText = question.question; // set question text
  const optionsContainer = document.getElementById('options'); // get options container
  for (let i = 0; i < question.options.length; i++) { // loop through answers
    const optionButton = document.createElement('button'); // button for each option
    optionButton.innerText = question.options[i]; // set button text
    optionButton.addEventListener('click', () => { // add event listener for option selection
      checkAnswer(i === question.answer); // check if the selected option is correct
    });
    optionsContainer.appendChild(optionButton); // Add the button to the options container
  }
}
// Function to check if the selected answer is correct and update score
function checkAnswer(correct) {
  if (correct) { // If the answer is correct
    score++; // Increment the score
  } else { // If the answer is incorrect
    timeLeft -= 10; // Subtract ten seconds for incorrect answer
    if (timeLeft < 0) { // Check if time is up
      timeLeft = 0; // Set time to zero
    }
    updateTimerDisplay(); // Update the timer display
  }
  currentQuestion++; // Move to the next question
  setNextQuestion(); // Display the next question
}
// finish quiz, display result
function finishQuiz() {
  clearInterval(timerInterval); //clear timer
  quizContainer.classList.add('hidden'); //hide quiz container
  resultContainer.classList.remove('hidden'); //show results container
  timeShow.classList.add('hidden') //hide time
  scoreDisplay.textContent = score; //display final score
}

//reset options container
function resetOptions() {
  const optionsContainer = document.getElementById('options');
  while (optionsContainer.firstChild) {
    optionsContainer.removeChild(optionsContainer.firstChild); // remove all child elements
  }
}
// update timer display
function updateTimer() {
  timeLeft--; //subtract from time left
  if (timeLeft <= 0) { //check if time left
    timeLeft = 0; // set time to 0
    finishQuiz();
  }
  updateTimerDisplay();
}
// update timer display
function updateTimerDisplay() {
  timeDisplay.textContent = timeLeft; // update display with current time left
}
//------------------------------------------------------------
// Variable for restart button
const restartButton = document.createElement('button'); // create new button to restart quiz
// restartButton.style.text = '16px';
// restartButton.style.color = 'red';
restartButton.classList.add('btn');
restartButton.textContent = 'Take Quiz Again'; // set button text
restartButton.addEventListener('click', restartQuiz); // event listener to the restart button to start quiz again
highScoresList.parentElement.appendChild(restartButton); // append restart button to high scores list container initially
restartButton.classList.add('hidden'); // hide restart button initially 

//------------------------------------------------------------
// event listener for submit score button
submitScoreBtn.addEventListener('click', () => {
  const initials = initialsInput.value;

  // Check initials have content
  if (initials !== '') {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('btn'); // create new list item to display score and initials
    scoreItem.textContent = `${initials}: ${score}`; // set text content of li with initials
    highScoresList.appendChild(scoreItem); // append score to list
    initialsInput.value = ''; // clear input
    resultContainer.classList.add('hidden'); // hide result container
    highScoresList.parentElement.classList.remove('hidden'); // show high score list container
    restartButton.classList.remove('hidden'); // Show the restart button after submitting the score
  }
});

// Function to restart quiz
function restartQuiz() {
  currentQuestion = 0; // reset current question array index to 0
  score = 0; // score reset to 0
  timeLeft = 60; // time left reset to 60 seconds
  clearInterval(timerInterval); // clear timer interval
  startQuiz(); // start quiz again
  resultContainer.classList.add('hidden'); // hide result container
  highScoresList.parentElement.classList.add('hidden'); // hide score list container
  restartButton.classList.add('hidden'); // Hide the restart button when restarting the quiz
}