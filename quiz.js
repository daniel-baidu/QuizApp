const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: 'What is the capital city of Ghana?',
        choice1: '<Ouagadougou>',
        choice2: '<Accra>',
        choice3: '<Lagos>',
        choice4: '<Ghana>',
        answer: 2,
    },
    {
        question: 'Which is the official language of Ghana?',
        choice1: '<Portugese>',
        choice2: '<Swaheli>',
        choice3: '<French>',
        choice4: '<English>',
        answer: 4,
    },
    {
        question: 'What is a common form of transport in Ghana?',
        choice1: '<Donkey>',
        choice2: '<Tro-Tro (Minibuses)>',
        choice3: '<Bike>',
        choice4: '<Train>',
        answer: 2,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

startGame();
