var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-conatiner')
var questionElement = document.getElementById('question')
var answerButtonElement = document.getElementById('answer-btn')
var askindex , currentQuestionIndex = 0 ;




function startGame(){
  //when start btn is clicked
 
  startButton.classList.add('hide')
  
  
  questionContainerElement.classList.remove('hide')
  nextButton.classList.remove('hide')
  showQuestion()
  
}



 
  // showQuestion()


function showQuestion(){
  //grab question syick into div
  var quest = question[currentQuestionIndex].q;
  questionElement.innerText = quest;

  for(var i=0; i <question[currentQuestionIndex].answers.length; i++ ){
    

    ansrButn = question[currentQuestionIndex].answers[i].text

    var Btns = document.createElement("button");
    Btns.innerText = ansrButn
    answerButtonElement.appendChild(Btns);
    Btns.setAttribute('class', 'btn');
    

     
   
  
  }

  
  
}



function SelectAnswer(){
  //what hapens when answer is selected

  //if answer is true
  //count++
  //else non

}




var question =[
  {
    q : "what is 2+2",
    answers : [
      {text : 4 , correct : true } ,
      {text : 56 , correct : false }
    ]
  }
  

  
]












startButton.addEventListener('click', startGame)


















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