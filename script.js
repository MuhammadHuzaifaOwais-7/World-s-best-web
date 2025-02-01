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

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Harper Lee', correct: true },
            { text: 'Mark Twain', correct: false },
            { text: 'Ernest Hemingway', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'What is the chemical symbol for gold?',
        answers: [
            { text: 'Au', correct: true },
            { text: 'Ag', correct: false },
            { text: 'Fe', correct: false },
            { text: 'Pb', correct: false }
        ]
    },{
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
            { text: 'China', correct: false },
            { text: 'Japan', correct: true },
            { text: 'Thailand', correct: false },
            { text: 'South Korea', correct: false }
        ]
    },
    {
        question: 'Who was the first person to walk on the moon?',
        answers: [
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Neil Armstrong', correct: true },
            { text: 'Yuri Gagarin', correct: false },
            { text: 'Michael Collins', correct: false }
        ]
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '0', correct: false },
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false }
        ]
    },
    {
        question: 'In which sport would you perform a slam dunk?',
        answers: [
            { text: 'Basketball', correct: true },
            { text: 'Football', correct: false },
            { text: 'Baseball', correct: false },
            { text: 'Hockey', correct: false }
        ]
    },
    {
        question: 'What is the main ingredient in guacamole?',
        answers: [
            { text: 'Tomato', correct: false },
            { text: 'Avocado', correct: true },
            { text: 'Pepper', correct: false },
            { text: 'Onion', correct: false }
        ]
    },
    {
        question: 'Who directed the movie "Jurassic Park"?',
        answers: [
            { text: 'James Cameron', correct : false },
            { text: 'Steven Spielberg', correct: true },
            { text: 'George Lucas', correct: false },
            { text: 'Peter Jackson', correct: false }
        ]
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Amazon', correct: true },
            { text: 'Nile', correct: false },
            { text: 'Yangtze', correct: false },
            { text: 'Mississippi', correct: false }
        ]
    },
    {
        question: 'Which element has the atomic number 1?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Hydrogen', correct: true },
            { text: 'Helium', correct: false },
            { text: 'Carbon', correct: false }
        ]
    },
    {
        question: 'Who is known as the "Father of Modern Physics"?',
        answers: [
            { text: 'Isaac Newton', correct: false },
            { text: 'Albert Einstein', correct: true },
            { text: 'Galileo Galilei', correct: false },
            { text: 'Niels Bohr', correct: false }
        ]
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Iron', correct: false },
            { text: 'Quartz', correct: false }
        ]
    },
    {
        question: 'Who discovered penicillin?',
        answers: [
            { text: 'Marie Curie', correct: false },
            { text: 'Alexander Fleming', correct: true },
            { text: 'Louis Pasteur', correct: false },
            { text: 'Gregor Mendel', correct: false }
        ]
    },
    {
        question: 'What is the capital city of Japan?',
        answers: [
            { text: 'Tokyo', correct: true },
            { text: 'Seoul', correct: false },
            { text: 'Beijing', correct: false },
            { text: 'Bangkok', correct: false }
        ]
    },
    {
        question: 'In which year did World War II end?',
        answers: [
            { text: '1945', correct: true },
            { text: '1944', correct: false },
            { text: '1939', correct: false },
            { text: '1946', correct: false }
        ]
    },
    {
        question: 'Who is the author of the Harry Potter series?',
        answers: [
            { text: 'J.R.R. Tolkien', correct: false },
            { text: 'J.K. Rowling', correct: true },
            { text: 'C.S. Lewis', correct: false },
            { text: 'Stephen King', correct: false }
        ]
    },
    {
        question: 'What is the largest mammal in the world?',
        answers: [
            { text: 'Elephant', correct: false },
            { text: 'Blue Whale', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Great White Shark', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'Who was the first female Prime Minister of the United Kingdom?',
        answers: [
            { text: 'Margaret Thatcher', correct: true },
            { text: 'Theresa May', correct: false },
            { text: 'Angela Merkel', correct: false },
            { text: 'Indira Gandhi', correct: false }
        ]
    },
    {
        question: 'What is the currency of the United States?',
        answers: [
            { text: 'Dollar', correct: true },
            { text: 'Euro', correct: false },
            { text: 'Pound', correct: false },
            { text: 'Yen', correct: false }
        ]
    },
    {
        question: 'Which gas do plants absorb from the atmosphere?',
        answers: [
            { text: 'Oxygen', correct: false },
            { text: 'Carbon Dioxide', correct: true },
            { text: 'Nitrogen', correct: false },
            { text: 'Hydrogen', correct: false }
        ]
    },
    {
        question: 'Who won the FIFA World Cup in 2018?',
        answers: [
            { text: 'Germany', correct: false },
            { text: 'Brazil', correct: false },
            { text: 'France', correct: true },
            { text: 'Argentina', correct: false }
        ]
    },
    {
        question: 'What is the main language spoken in Brazil?',
        answers: [
            { text: 'Spanish', correct: false },
            { text: 'Portuguese', correct: true },
            { text: 'English', correct: false },
            { text: 'French', correct: false }
        ]
    },
    {
        question: 'In which continent is the Sahara Desert located?',
        answers: [
            { text: 'Asia', correct: false },
            { text: 'Africa', correct: true },
            { text: 'Australia', correct: false },
            { text: 'North America', correct: false }
        ]
    },
    {
        question: 'Who invented the telephone?',
        answers: [
            { text: 'Thomas Edison', correct: false },
            { text: 'Alexander Graham Bell', correct: true },
            { text: 'Nikola Tesla', correct: false },
            { text: 'Guglielmo Marconi', correct: false }
        ]
    },
    {
        question: 'What is the name of the longest bone in the human body?',
        answers: [
            { text: 'Femur', correct: true },
            { text: 'Humerus', correct: false },
            { text: 'Tibia', correct: false },
            { text: 'Fibula', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('d-none');
    gameScreen.classList.remove('d-none');
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 30;
    scoreElement.innerText = `Score: ${score}`;
    feedbackElement.innerText = '';
    startTimer();
    showQuestion(questions[currentQuestionIndex]);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(nextQuestion, 1000);
        }
    }, 1000);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-outline-primary', 'mb-2');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    clearInterval(timer);
    const correct = answer.correct;
    showFeedback(correct);
    if (correct) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
    setTimeout(nextQuestion, 1000);
}

function showFeedback(correct) {
    feedbackElement.innerText = correct ? 'Correct!' : 'Incorrect!';
}

function nextQuestion() {
    timeLeft = 30;
    timerElement.innerText = timeLeft;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
        startTimer();
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(timer);
    gameScreen.classList.add('d-none');
    endScreen.classList.remove('d-none');
    finalScoreElement.innerText = score;
}

document.getElementById('restart-button').addEventListener('click', () => {
    endScreen.classList.add('d-none');
    startScreen.classList.remove('d-none');
});

function startGame() {
    startScreen.classList.add('d-none');
    gameScreen.classList.remove('d-none');
    gameScreen.classList.add('show');
    setTimeout(() => {
        gameScreen.style.opacity = 1; // Fade in effect
    }, 10); // Small timeout to allow the class to take effect
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 30;
    scoreElement.innerText = `Score: ${score}`;
    feedbackElement.innerText = '';
    startTimer();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-outline-primary', 'mb-2');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    clearInterval(timer);
    const correct = answer.correct;
    showFeedback(correct);
    if (correct) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    }
    setTimeout(nextQuestion, 1000);
}