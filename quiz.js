const questionDisplay = document.getElementById('questionDisplay');
const navButton = document.getElementById('navButton');

const optionA = document.getElementById('ans_A');
const optionB = document.getElementById('ans_B');
const optionC = document.getElementById('ans_C');
const optionD = document.getElementById('ans_D');

let questionText = document.getElementById('questionText');
let finalText = document.getElementById('finalText');
let totalScore = document.getElementById('totalScore');
let ifLessThanTwo = document.getElementById('ifLessThanTwo');

let progressQuestion = document.getElementById('progressQuestion');
let progressQuestionCounter = 1;
// counter starts at 1 (renders on first generateQuestion load)
let correctQuestion = document.getElementById('correctQuestion');
let correctAnswerCounter = 0;

let randVar1 = Math.floor(Math.random() * 7) + 2;
let randVar2 = Math.floor(Math.random() * 7) + 2;
let randVar3 = Math.floor(Math.random() * 7) + 2;
let randVar4 = Math.floor(Math.random() * 7) + 2;
let randVar5 = Math.floor(Math.random() * 7) + 1;
// most of the random values are +2 to avoid multiple 1's per game

let quizData = [
  { question: "Multiply " + randVar4 + " x " + randVar2,
    answers: [
      { option: "A", text: (randVar4 * randVar2).toString(), correct: "true" },
      { option: "B", text: ((randVar4 + 1) * randVar2).toString(), correct: "false" },
      { option: "C", text: (randVar4 * randVar2 - 1).toString(), correct: "false" },
      { option: "D", text: (randVar4 * randVar2 + 2).toString(), correct: "false" }
    ]
  },
  { question: "Multiply " + randVar3 + " x " + randVar2,
    answers: [
      { option: "A", text: ((randVar3 + 2) * randVar2 -1).toString(), correct: "false" },
      { option: "B", text: ((randVar3 + 1) * randVar2).toString(), correct: "false" },
      { option: "C", text: (randVar3 * randVar2).toString(), correct: "true" },
      { option: "D", text: ((randVar3 * randVar2) + 2).toString(), correct: "false" }
    ]
  },
  { question: "Multiply " + randVar4 + " x " + randVar1,
    answers: [
      { option: "A", text: (randVar4 * randVar1 +1).toString(), correct: "false" },
      { option: "B", text: (randVar4 * randVar1).toString(), correct: "true" },
      { option: "C", text: ((randVar4 * randVar1) +3).toString(), correct: "false" },
      { option: "D", text: ((randVar4 * randVar1) + 2).toString(), correct: "false" }
    ]
  },
  { question: "Multiply " + randVar5 + " x " + randVar3,
    answers: [
      { option: "A", text: (randVar5 * randVar3 +4).toString(), correct: "false" },
      { option: "B", text: (randVar5 * randVar3).toString(), correct: "true" },
      { option: "C", text: (randVar3 * randVar5 -2).toString(), correct: "false" },
      { option: "D", text: ((randVar5 * randVar3) + 2).toString(), correct: "false" }
    ]
  },
  { question: "Multiply " + randVar1 + " x " + randVar5,
  answers: [
    { option: "A", text: (randVar5 * randVar1 +4).toString(), correct: "false" },
    { option: "B", text: ((randVar5 * randVar1) +2).toString(), correct: "false" },
    { option: "C", text: (randVar1 * randVar5 -2).toString(), correct: "false" },
    { option: "D", text: (randVar5 * randVar1).toString(), correct: "true" }
  ]
}
];



let randomIndex = Math.floor(Math.random() * quizData.length);
let randomQuestion = quizData[randomIndex];



function generateQuestion() {
 randomIndex = Math.floor(Math.random() * quizData.length);
 randomQuestion = quizData[randomIndex];

 if (navButton.innerHTML === "START"){

  navButton.style.display = 'none'
  navButton.textContent = 'NEXT';
  questionText.style.display ='flex'
  optionA.style.display ='revert'
  optionB.style.display ='revert'
  optionC.style.display ='revert'
  optionD.style.display ='revert'

  optionA.style.background = '#36505F'
  optionB.style.background = '#36505F'
  optionC.style.background = '#36505F'
  optionD.style.background = '#36505F'

  questionDisplay.textContent = randomQuestion.question;
  
  optionA.textContent = randomQuestion.answers[0].text;
  optionB.textContent = randomQuestion.answers[1].text;
  optionC.textContent = randomQuestion.answers[2].text;
  optionD.textContent = randomQuestion.answers[3].text;

  quizData.splice(randomIndex, 1);

 } else if (randomQuestion === undefined && navButton.innerHTML === 'BACK'){

    location.reload()

 } else if (randomQuestion === undefined) {
 
    if (correctAnswerCounter === 1) {
      ifLessThanTwo.textContent = 'answer'
    }
    
    questionText.style.display = 'none'
    finalText.style.display = 'revert'

    totalScore.textContent = correctAnswerCounter;
    questionDisplay.textContent = 'Great!';
    navButton.textContent = 'BACK';
    navButton.style.display = 'flex'
    optionA.style.visibility ='hidden'
    optionB.style.visibility ='hidden'
    optionC.style.visibility ='hidden'
    optionD.style.visibility ='hidden'

 } else {

    optionA.style.display ='revert'
    optionB.style.display ='revert'
    optionC.style.display ='revert'
    optionD.style.display ='revert'
    navButton.style.display = 'none'

    optionA.style.background = '#36505F'
    optionB.style.background = '#36505F'
    optionC.style.background = '#36505F'
    optionD.style.background = '#36505F'

    optionA.removeAttribute('disabled');
    optionB.removeAttribute('disabled');
    optionC.removeAttribute('disabled');
    optionD.removeAttribute('disabled');

    correctQuestion.textContent = correctAnswerCounter;
    progressQuestion.textContent = progressQuestionCounter;
    questionDisplay.textContent = randomQuestion.question;

    optionA.textContent = randomQuestion.answers[0].text;
    optionB.textContent = randomQuestion.answers[1].text;
    optionC.textContent = randomQuestion.answers[2].text;
    optionD.textContent = randomQuestion.answers[3].text;

    quizData.splice(randomIndex, 1);

  }
}



function checkQuestions() {
  function checkQuestionAnswerA() {
    if (randomQuestion.answers[0].correct === 'true') {
      optionA.style.background = '#a3dbaf';
    } else {
      optionA.style.background = '#eb4034';
    }
    optionA.disabled = true;
  }

  function checkQuestionAnswerB() {
    if (randomQuestion.answers[1].correct === 'true') {
      optionB.style.background = '#a3dbaf';
    } else {
      optionB.style.background = '#eb4034';
    }
    optionB.disabled = true;
  }

  function checkQuestionAnswerC() {
    if (randomQuestion.answers[2].correct === 'true') {
      optionC.style.background = '#a3dbaf';
    } else {
      optionC.style.background = '#eb4034';
    }
    optionC.disabled = true;
  }

  function checkQuestionAnswerD() {
    if (randomQuestion.answers[3].correct === 'true') {
      optionD.style.background = '#a3dbaf';
    } else {
      optionD.style.background = '#eb4034';
    }
    optionD.disabled = true;
  }

  checkQuestionAnswerA();
  checkQuestionAnswerB();
  checkQuestionAnswerC();
  checkQuestionAnswerD();
  navButton.textContent = 'NEXT';
  navButton.style.display = 'flex';

  progressQuestionCounter++;
}


optionA.addEventListener('click', function() {
  checkQuestions();
  if (randomQuestion.answers[0].correct === 'true') {
      correctAnswerCounter++;
  }
});

optionB.addEventListener('click', function() {
  checkQuestions();
  if (randomQuestion.answers[1].correct === 'true') {
      correctAnswerCounter++;
  }
});

optionC.addEventListener('click', function() {
  checkQuestions();
  if (randomQuestion.answers[2].correct === 'true') {
      correctAnswerCounter++;
  }
});

optionD.addEventListener('click', function() {
  checkQuestions();
  if (randomQuestion.answers[3].correct === 'true') {
      correctAnswerCounter++;
  }
});