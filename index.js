
// light-dark-mode-toggle
let lightDarkToggle = document.querySelector('.light-dark-mode');

lightDarkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// hämtar aktuell tid från date-objekt, initierar variabel för time
let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });
document.querySelector('.time').textContent = time;


// Musikknappen, initierar variabler för knapp och ljud
let music = document.querySelector('#menti-music');
let isPlaying = false;

document.querySelector('.music-button').addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        document.querySelector('.music-button').textContent = "🙉";
        isPlaying = false;
    } else {
        music.play();
        document.querySelector('.music-button').textContent = "MAKE IT STOP!";
        isPlaying = true;
    }
});

// en array med objekt för frågor och svar
let questions = [
    {
        text: "Ett moln väger cirka 1 miljon ton.",
        answer: true
    },
    {
        text: "Bär du slips kan det minska din blodtillförsel till hjärnan med upp till 7,5%.",
        answer: true
    },
    {
        text: "Vindturbiner dödar mellan 10,000 och 100,000 fåglar per år.",
        answer: true
    },
    {
        text: "1 av 2,500 personer känner inte att dom är gravida förrän förlossningen startar.",
        answer: true
    },
    {
        text: "Kampsportare som ler precis innan matchen startar löper större risk att förlora.",
        answer: true
    },
    {
        text: "En blixt är fem gånger varmare än solens yta.",
        answer: true
    },
    {
        text: "Du kan inte vika ett A4-papper fler än 8 gånger.",
        answer: true
    },
    {
        text: "När första filmen om Star Wars kom ut så var Giljotinen fortfarande Frankrikes främsta verktyg för avrättning.",
        answer: true
    },
    {
        text: "Man åkte till månen innan resväska på hjul hade uppfunnits.",
        answer: true
    },
    {
        text: "I ett rum med 23 personer är det 50% chans att du delar födelsedag med en av dem.",
        answer: true
    },
]

// initierar räknare för användarens poäng
let score = 0;

// initierar index för att hålla koll på vilken fråga som visas
let questionIndex = 0;

// dynamisk maxgräns på antal frågor totalt i quizet, baserat på antalet frågor i array
document.querySelector('.max-questions').textContent = questions.length;

//deklarerar variabel för ljud, för användning i showQuestion baserat på användarens resultat
let sound;

// kollar om det finns frågor att visa och ändrar DOM baserat på conditional
function showQuestion() {
    let scorePercentage = (score / questions.length) * 100;
    
    if (questionIndex < questions.length) {
        document.querySelector('.question-number').textContent = questionIndex + 1;
        document.querySelector('.question').textContent = questions[questionIndex].text;

        if (questionIndex === questions.length - 1) {
            music.pause();
            document.querySelector('.music-button').textContent = "🙉";
        }

    } else {
        document.querySelector('.quiz-header').textContent = "Nu är det slut på frågor!";
        document.querySelector('.question').textContent = "";
        document.querySelector('.bottom-half').style.display = "none";
        document.querySelector('.score').style.display = "block";

        // conditional för output av score-procent
        if (scorePercentage < 50) {
            document.querySelector('.phone').style.backgroundColor = "#f44336";
            document.querySelector('.score').innerHTML = `Du fick ${score} av ${questions.length} rätt.`;
            document.querySelector('.score-feedback').textContent = `Det är inte kanon det här.`
            sound = document.querySelector('#bad-sound');
        } else if (scorePercentage >= 50 && scorePercentage <= 75) {
            document.querySelector('.phone').style.backgroundColor = "orange";
            document.querySelector('.score').innerHTML = `Du fick ${score} av ${questions.length} rätt.`;
            document.querySelector('.score-feedback').innerHTML = `Det var inte bra och inte dåligt.`;
        } else {
            document.querySelector('.phone').style.backgroundColor = "#4caf50";
            document.querySelector('.score').innerHTML = `Du fick ${score} av ${questions.length} rätt.`;
            document.querySelector('.score-feedback').innerHTML = `Otroligt bra.`
            sound = document.querySelector('#great-sound');
        }
        
        if (sound) {
            sound.play();
        }
    }
}

// tar in svaret med argument från eventlistener och om det stämmer överens med svaret i objektet för indexet så ökar score++ med 1
function checkAnswer(userInputAnswer) {
    if (userInputAnswer === questions[questionIndex].answer) score++; {
    questionIndex++;
    showQuestion();
    }
}

// anropar checkAnswer-funktionen och skickar argument beroende på knappval för sant/falskt
document.querySelector('.true-btn').addEventListener('click', () => checkAnswer(true));
document.querySelector('.false-btn').addEventListener('click', () => checkAnswer(false));


showQuestion();