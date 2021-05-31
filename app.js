const quizData = [
  {
    question: "HTML'nin açılımı nedir?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Hypertext Markup Link",
    correct: "a",
  },

  {
    question: "Hangisi bir İsmail Türüt şarkısıdır?",
    a: "Bir tosun aldım beşe",
    b: "At da tut",
    c: "Abu çi-çi",
    d: "Korona Covit19 Türküsü",
    correct: "d",
  },

  {
    question: "Hangisi 2020 yılının en çok kullanılan yazılım dilidir?",
    a: "Java",
    b: "C#",
    c: "Python",
    d: "Javascript",
    correct: "c",
  },

  {
    question: "Bu yıl Youtube'da hangisini seyretmek daha eğlenceliydi?",
    a: "Arka Sokaklar-Suat soyguncu olursa",
    b: "Nihat Hatipoğlu ile Dosta Doğru",
    c: "Murat Hoca ile Javascript Dersleri",
    d: "Reis Sedat Peker ile Z Raporu",
    correct: "d",
  },

  {
    question: "Javascript hangi yıl piyasaya çıkmıştır?",
    a: "1996",
    b: "1995",
    c: "2018",
    d: "1992",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();

  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>${score}/${quizData.length} soru doğru cevapladın.</h2><button onclick = "location.reload()">Tekrar Dene</button>`;
    }
  }
});
