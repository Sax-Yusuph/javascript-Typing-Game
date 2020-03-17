window.addEventListener("load", init);

//code by Kingshams... Its a simple project, but dont copy, try understand how it works.if you love my code. Let me get an upvote.. Thanks

function init(){

// Globals
let time=4;
let score=0;
let playOn;

// get DOM elements
let seconds= document.getElementById("seconds");
let currentWord=document.getElementById("currentWord");
let wordInput= document.getElementById("input");
let notify = document.getElementById("notification");
let timeLeft= document.getElementById("timeLeft");
let currentScore= document.getElementById("currentScore");
let finalScore = document.getElementById('finalScore');
let scoreValue = document.getElementById('score');

// get wordList
const wordList=[
"Motivation","School", "Office", "Intelligence",
"Sololearn", "Javascript","Program", "Developer", "Website", "Simple", "Game", "Interesting", "Annotation",
"Countries", "Moderator"
]

timeLeft.innerText = time + "s";
// call to execute functions
    displayWords(wordList);
    
    //start Game
    wordInput.addEventListener("input",()=>{
     if (wordInput.value.toUpperCase() === currentWord.innerText.toUpperCase()){
         notify.innerText = "correct" ;
         playOn = true;  
         displayWords(wordList);     
         wordInput.value="";
         time = 4;
         score++;
         if (score<0){
            currentScore.innerText ="$" +0 ;
         }else{
          currentScore.innerText="$" + score;
          }
    } else{
      notify.innerText = "...";
         }
        
    
    })
    
     // set countDown
    setInterval(countDown, 1000);
    var stat = setInterval(gameStatus, 200);
    
    
    
  //function to display words from array
function displayWords(x){
    let randIndex = Math.floor(Math.random() * x.length);
    currentWord.innerText= x[randIndex];
    
}
// countdown time function
function countDown(){
    if(time>0 && playOn){
        time--;
    }else if(time==0){
        notify.innerText = ""
        playOn= false ;
        

    }
    timeLeft.innerText = time + "s";
}

function gameStatus(){
    
if (!playOn && time===0){
    finalScore.style.visibility = 'visible'
    scoreValue.innerText = "score is " + score
        score = -1;
        clearInterval(stat);
    }else{
        return;
    }
 }








    
}