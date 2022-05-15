
//Start Fuction
let start = document.querySelector('.start');
let quiz = document.querySelector('.questions');
let welcome = document.querySelector('.head');
let all = document.querySelector('.all');
let intro = document.querySelector('.intro');
let board = document.querySelector('.board');
let userData = document.querySelector('.user');
let button = document.querySelector('.btn-2');
let submitButton = document.querySelector('.btn3');
let userName = document.querySelector('#user');
let heading = document.querySelector('#head1');
let reset = document.querySelector('.reset');

//user data
function user(){
    welcome.style.display ="block";
    userData.style.display = "none";
    button.style.display ="none"
    userData.style.display ="none";
    heading.innerHTML =  userName.value+ " " +"please proceed";
}

//function hide and display elements
function startQuiz(){
    welcome.style.display ="none";
    all.style.display="block";
    intro.style.display = "block";
    heading.style.display ="none";
}
//function onclicknext


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

//output performnace
var  performance = score;
        switch (true) {
            case(performance <= 100 && performance >80):
              performance = ("Excellently passed")
                break;

            case (performance <= 80 && performance >=50):
               performance = ("Fairly passed")
                break;
            
             case (performance <50 && performance >=0):
                    performance = ("Please retake the test")
                     break;
        
            default:
                performance = ("its not a value")
        }
    
    
    //alert("Your score is" + score);
    
    intro.style.display = "none";
    board.style.display ="block";
    board.innerHTML = "Your score is " + score + " " +"out of 100"+ " " +performance;
    all.style.display = "none";
    reset.style.display = "block";
}


