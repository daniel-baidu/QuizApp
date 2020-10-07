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
 
];


startGame();
