const questions = [
  {
    question: "What is the capital of Japan?",
    options: [
      { text: "Tokyo", correct: true },
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Bangkok", correct: false },
    ],
    
  },
  {
    question: "Which language is used for styling web pages?",
    options: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
    ],
    
  },
  {
    question: "Which data structure follows LIFO?",
    options: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
    ],
    
  },
  {
    question: "Which planet is the largest in our solar system?",
    options: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Venus", correct: false },
    ],
    
  },
  {
    question: "What does HTTP stand for?",
    options: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "High Transfer Text Protocol", correct: false },
      { text: "Hyper Transfer Text Process", correct: false },
      { text: "HyperText Transmission Program", correct: false },
    ],
    
  },
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector(".answer-buttons");
const nextButton = document.querySelector(".next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.options.forEach(option =>{
        const button = document.createElement("button");
        button.innerHTML = option.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(option.correct){
          button.dataset.correct = option.correct;
        }
        button.addEventListener("click" , selectAnswer);
    })
}


function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
Array.from(answerButtons.children).forEach(button =>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";

}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play again!"
  nextButton.style.display = "block";
}

function handelNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handelNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();
