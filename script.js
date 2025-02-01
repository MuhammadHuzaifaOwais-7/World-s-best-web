const startButton = document.getElementById('start-button');
const gameScreen = document.getElementById('game-screen');
const startScreen = document.getElementById('start-screen');
const endScreen = document.getElementById('end-screen');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const finalScoreElement = document.getElementById('final-score');
const timerElement = document.getElementById('time-left');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
