var h1 = document.getElementById('h1')
var questionContainerElement = document.getElementById('questionsConatiner')
var questions = document.getElementById('Questions')
var strtBtn = document.querySelector('.start-btn')
var input  = document.querySelector('.initInput')
var btn  = document.querySelector('.initBtn')
var totalScore = document.querySelector(".totalScore")
var timer = document.querySelector(".timer") 
var initButton = document.querySelector(".initBtn")
var initials = document.querySelector(".initInput")
var results = document.querySelector(".scores")
var rules = document.querySelector('.rules')

var startTime = 20;
var questionIndex =0; 
var score =0;
var highScores = JSON.parse(localStorage.getItem('highscores'))|| [];






const q = [
{question: 'what is 2+2?',
choices: [
{choice:'2'},
{choice:'3'},
{choice:'4'},
{choice:'5'}
],
 answer: 4,
} ,
{question: 'what is 2+0?',
choices: [
{choice:'2'},
{choice:'3'},
{choice:'4'},
{choice:'5'}
],
answer: 2,
} ,
{question: 'what is 2+1?',
choices: [
{choice:'2'},
{choice:'3'},
{choice:'4'},
{choice:'5'}
],
answer: 3,
} ,
{question: 'what is 2+3?',

choices: [
{choice:'2'},
{choice:'3'},
{choice:'0'},
{choice:'5'}
],
answer: 5,
}
]


/** */
function startGame(){
    strtBtn.classList.add("hidden");
    rules.classList.add("hidden");
    
    console.log(strtBtn)
    questions.classList.remove("hidden");
    questionContainerElement.classList.remove("hidden");
    setTime()
    showQuestion()
}       

function showQuestion(){
    
    
    questionContainerElement.innerText = q[questionIndex].question
    createChoices()
}    


function createChoices(){

    questions.innerHTML = '';
    for(let i =0;i<q[questionIndex].choices.length;i++ ){
        
        var answerBtn = document.createElement('button')
        answerBtn.innerHTML += q[questionIndex].choices[i].choice
        answerBtn.addEventListener('click', nextQuestion)
        //look up event delagation for dynamic event listners
        questions.appendChild(answerBtn)
    }    
    
}    

function nextQuestion(event){
    console.log(event.target.innerText)
    questionIndex = questionIndex +1
    //check for right or wrong answers
    if(questionIndex>= q.length){
        
        endGame()
    }else
    {
        showQuestion()
    }    


    if(parseInt(event.target.innerText) === q[questionIndex-1].answer){
        
        console.log('correct')
        score = score +1;
        totalScore.innerText = "Score: " + score
        
        
        
    }else {
        console.log('wrong')
       
    }    
    
}    




function endGame(){
    strtBtn.classList.add("hidden");
    questions.classList.add("hidden");
    questionContainerElement.classList.add("hidden");
    input.classList.remove("hidden");
    results.classList.remove('hidden');
    btn.classList.remove("hidden");
    timer.classList.add("hidden");
    
}    
function setTime() {
    setInterval(function() {
        startTime--;
      timer.textContent = startTime + " seconds left";
  
      if(startTime === 0) {
        timer.classList.add("hidden"); 
        endGame()
      }
  
    }, 1000);
  }



  initButton.addEventListener('click', function(event){
     event.preventDefault()
    var usrInit = initials.value
    

    
    final = {
        init : usrInit,
        score: score
    }
    highScores.push(final)
    localStorage.setItem("highscores", JSON.stringify(highScores))
    
    // localStorage.setItem("initials", usrInit);
    // localStorage.setItem("score", score);
    renderScores()
  
})

function renderScores(){
   
      for(var i =0; i<highScores.length; i++){
      var p = document.createElement('p')    
        p.innerText = highScores[i].init + " Score: " + highScores[i].score
        results.appendChild(p)
        console.log(highScores[i])
      }

}


strtBtn.addEventListener('click',startGame )