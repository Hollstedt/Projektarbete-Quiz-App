
// light-dark-mode-toggle
let lightDarkToggle = document.querySelector('.light-dark-mode');

lightDarkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// en array med objekt för fråga och svar
let questions = [
    {
        text: "Den här frågan är true",
        answer: true
    },
    {
        text: "Den här frågan är false",
        answer: false
    },
    {
        text: "Den här frågan är true",
        answer: true
    },
]

// räknare för poäng
let score = 0;

// index för aktuell fråga
let questionIndex = 0;

function showQuestion() {
    if (questionIndex < questions.length) {
        console.log("nu är du i if på showQuestion");
        document.querySelector('.question-number').textContent = questionIndex + 1;
        document.querySelector('.question').textContent = questions[questionIndex].text;
    } else {
        console.log("nu är du i else på showQuestion");
        document.querySelector('.score').textContent = `Ditt resultat är ${score} av ${questions.length}.`
    }
}

function checkAnswer(userInputAnswer) {
    if (userInputAnswer === questions[questionIndex].answer) {
        console.log("Rätt svar! nu är du i if på checkAnswer");
        score++;
    } else {
        console.log("Fel svar! nu är du i else på checkAnswer");
    }
    questionIndex++;
    showQuestion();
}

// ger argument till kommande funktion beroende på knappval för sant/falskt
document.querySelector('.true-btn').addEventListener('click', () => checkAnswer(true));
document.querySelector('.false-btn').addEventListener('click', () => checkAnswer(false));

showQuestion();