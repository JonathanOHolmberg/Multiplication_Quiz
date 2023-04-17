var randVar1 = Math.floor(Math.random() * 8) + 1;
var randVar2 = Math.floor(Math.random() * 8) + 1;
var randVar3 = Math.floor(Math.random() * 8) + 1;
var randVar4 = Math.floor(Math.random() * 8) + 1;
var randVar5 = Math.floor(Math.random() * 8) + 1;

var quizData = [
  { question: "Laske " + randVar1 + " x " + randVar2,
    answers: [
      { option: "A", text: (randVar1 * randVar2).toString(), correct: "true" },
      { option: "B", text: ((randVar1 + 1) * randVar2).toString(), correct: "false" },
      { option: "C", text: (randVar1 * randVar2 - 1).toString(), correct: "false" },
      { option: "D", text: (randVar1 * randVar2 + 2).toString(), correct: "false" }
    ]
  },
  { question: "Laske " + randVar3 + " x " + randVar2,
    answers: [
      { option: "A", text: ((randVar3 + 2) * randVar2 -1).toString(), correct: "false" },
      { option: "B", text: ((randVar3 + 1) * randVar2).toString(), correct: "false" },
      { option: "C", text: (randVar3 * randVar2).toString(), correct: "true" },
      { option: "D", text: ((randVar3 * randVar2) + 2).toString(), correct: "false" }
    ]
  },
  { question: "Laske " + randVar4 + " x " + randVar1,
    answers: [
      { option: "A", text: (randVar4 * randVar1 +1).toString(), correct: "false" },
      { option: "B", text: (randVar4 * randVar1).toString(), correct: "true" },
      { option: "C", text: ((randVar4 * randVar1) +3).toString(), correct: "false" },
      { option: "D", text: ((randVar4 * randVar1) + 2).toString(), correct: "false" }
    ]
  },
  { question: "Laske " + randVar5 + " x " + randVar3,
    answers: [
      { option: "A", text: (randVar5 * randVar3 +4).toString(), correct: "false" },
      { option: "B", text: (randVar5 * randVar3).toString(), correct: "true" },
      { option: "C", text: (randVar3 * randVar5 -2).toString(), correct: "false" },
      { option: "D", text: ((randVar5 * randVar3) + 2).toString(), correct: "false" }
    ]
  },
  { question: "Laske " + randVar5 + " x " + randVar4,
    answers: [
      { option: "A", text: (randVar5 * randVar4 +3).toString(), correct: "false" },
      { option: "B", text: (randVar5 * randVar4 +1).toString(), correct: "false" },
      { option: "C", text: (randVar4 * randVar5 -2).toString(), correct: "false" },
      { option: "D", text: (randVar5 * randVar4).toString(), correct: "true" }
    ]
  },
];


const questionDisplay = document.getElementById('questionDisplay');
const navButton = document.getElementById('navButton');
const victoryGIF = document.getElementById('Victory');
const optionA = document.getElementById('ans_A');
const optionB = document.getElementById('ans_B');
const optionC = document.getElementById('ans_C');
const optionD = document.getElementById('ans_D');

var randomIndex = Math.floor(Math.random() * quizData.length);
var randomQuestion = quizData[randomIndex];


function generateQuestion() {
randomIndex = Math.floor(Math.random() * quizData.length);
randomQuestion = quizData[randomIndex];
  if (randomQuestion === undefined && navButton.innerHTML === 'Alkuun'){
    location.reload()
  } else if (randomQuestion === undefined) {
    alert ("Onneksi olkoon, vastasit kaikkiin kysymyksiin!")
    victoryGIF.style.display = 'revert'
    navButton.textContent = 'Alkuun'
  } else {
    optionA.style.display ='revert'
    optionB.style.display ='revert'
    optionC.style.display ='revert'
    optionD.style.display ='revert'
    optionA.style.background = '#36505F'
    optionB.style.background = '#36505F'
    optionC.style.background = '#36505F'
    optionD.style.background = '#36505F'
    navButton.style.display = 'none'

    questionDisplay.textContent = randomQuestion.question;
    optionA.textContent = randomQuestion.answers[0].text;
    optionB.textContent = randomQuestion.answers[1].text;
    optionC.textContent = randomQuestion.answers[2].text;
    optionD.textContent = randomQuestion.answers[3].text;

    quizData.splice(randomIndex, 1);
  }
}


function checkQuestionAnswerA(){

  if (randomQuestion.answers[0].correct === 'true'){
    optionA.style.background = '#a3dbaf'
    navButton.style.display = 'revert'
    navButton.textContent = 'Jatka'
  } else {
    alert ("Väärä vastaus!")
    optionA.style.background = '#eb4034'
  }
}

function checkQuestionAnswerB(){

  if (randomQuestion.answers[1].correct === 'true'){
    optionB.style.background = '#a3dbaf'
    navButton.style.display = 'revert'
    navButton.textContent = 'Jatka'
  } else {
    alert ("Väärä vastaus!")
    optionB.style.background = '#eb4034'
  }
}

function checkQuestionAnswerC(){

  if (randomQuestion.answers[2].correct === 'true'){
    optionC.style.background = '#a3dbaf'
    navButton.style.display = 'revert'
    navButton.textContent = 'Jatka'
  } else {
    alert ("Väärä vastaus!")
    optionC.style.background = '#eb4034'

  }
}

function checkQuestionAnswerD(){

if (randomQuestion.answers[3].correct === 'true'){
    optionD.style.background = '#a3dbaf'
    navButton.style.display = 'revert'
    navButton.textContent = 'Jatka'
  } else {
    alert ("Väärä vastaus!")
    optionD.style.background = '#eb4034'

  }
}