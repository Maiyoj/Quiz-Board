
//Start Fuction
let start = document.querySelector('.start');
let quiz = document.querySelector('.questions');
let welcome = document.querySelector('.head');
let all = document.querySelector('.all');
let intro = document.querySelector('.intro');
let board = document.querySelector('.board');
//display block



//function hide and display elements
function startQuiz(id){
    welcome.style.display ="none";
    all.style.display="block";
    intro.style.display = "block";
}
//function onclicknext


function next(){
   
    
}


//results functions

function results(){
    let score = 0;
    if (document.getElementById('choiceCorrect1').checked){
        score += 25;
    }
    if (document.getElementById('choiceCorrect2').checked){
        score +=25;
    }
    if (document.getElementById('choiceCorrect3').checked){
        score +=25;
    }

      if (document.getElementById('choiceCorrect4').checked){
        score +=25;
    }


    
    //alert("Your score is" + score);
    board.innerHTML = "your score is " + score + " " +"out of 100";

}

//Performance output

switch (score){

  case 100:
    alert("You did great!" + "your score is " +score);
    break;
  
  case 90:
    console.log("You did good!");
    break;

  
  case 10:
    console.log("YOU FAILED!");
    break;

  default:
    console.log(score,"is not a letter grade");
}
