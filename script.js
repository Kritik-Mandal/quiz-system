const quizzes = {
    easy: [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
            answer: 'Paris'
        },
        {
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            answer: '4'
        }
    ],
    medium: [
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
            answer: 'Jupiter'
        },
        {
            question: 'Who wrote "To Kill a Mockingbird"?',
            options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
            answer: 'Harper Lee'
        }
    ],
    hard: [
        {
            question: 'What is the derivative of sin(x)?',
            options: ['cos(x)', '-sin(x)', 'tan(x)', 'sec(x)'],
            answer: 'cos(x)'
        },
        {
            question: 'In what year was the United Nations established?',
            options: ['1945', '1950', '1960', '1970'],
            answer: '1945'
        }
    ]
};

let currentQuizIndex = 0;
let score = 0;
let selectedDifficulty = 'easy';
let selectedQuizzes = quizzes[selectedDifficulty];

function selectDifficulty() {
    selectedDifficulty = document.getElementById('difficulty').value;
    selectedQuizzes = quizzes[selectedDifficulty];
    currentQuizIndex = 0;
    score = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    const quiz = selectedQuizzes[currentQuizIndex];
    const questionElement = document.createElement('h2');
    questionElement.textContent = quiz.question;
    quizContainer.appendChild(questionElement);

    quiz.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        quizContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const quiz = selectedQuizzes[currentQuizIndex];
    if (selectedOption === quiz.answer) {
        score++;
        alert('Correct!');
    } else {
        alert('Incorrect!');
    }
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < selectedQuizzes.length) {
        showQuestion();
        document.getElementById('next-button').style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You scored ${score} out of ${selectedQuizzes.length}`;
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
    document.getElementById('next-button').style.display = 'none';
});
