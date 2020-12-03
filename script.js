const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-conatiner')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-btn')




startButton.addEventListener('click', startGame)


function startGame(){
  //when start btn is clicked
  console.log('started')
  startButton.classList.add('hide')
  
 
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}


function setNextQuestion(){
  //when next btn is clicked

  //function for showing question
  showQuestion(shufflesQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.q

}

function SelectAnswer(){
  //what hapens when answer is selected
}




const question =[
  {
    q : "what is 2+2",
    answers : [
      {text : 4 , correct : true } ,
      {text : 56 , correct : false }
    ]
  }
]





























// const startButton = document.getElementById('start-btn')
// const  questionContainerElement = document.getElementById('question-container')
// startButton.addEventListener('click', startGame)
// let shufflesQuestions, currentQuestionIndex;
// const questionElement = document.getElementById('question')
// let answerbtnEl = document.getElementById("answer-btn")


// function startGame(){
//   console.log("started")
//   startButton.classList.add('hide')
//   shufflesQuestions = questions.sort(()=>Math.random( )- .5)
//   currentQuestionIndex = 0;
//   questionContainerElement.classList.remove('hide')
  
// }
// function setNextQuestion(question){
//   showQuestion(shufflesQuestions[currentQuestionIndex])
 
// }

// function showQuestion(questions){
//   questionElement.innerText = questions.question

// }

// function SelectAnswer(){

// }

// const questions = [{
//   question :'what is 2+2',
//   answres :[
//     {text: 4 , correct :true},
//     {text: 5 , correct :false}
//   ]

// }

// ]