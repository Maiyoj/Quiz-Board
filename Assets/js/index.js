
//Start Fuction
let start = document.querySelector('.start');
let quiz = document.querySelector('.questions');
let welcome = document.querySelector('.head');
let all = document.querySelector('.all');
let intro = document.querySelector('.intro');
let board = document.querySelector('.board');



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








var  performance = score;
        switch (performance) {
            case(performance <= 100 && performance >80):
              performance = ("great")
                break;
                case (performance <= 80 && performance > 50):
               performance = ("good")
                break;
            default:
                performance = ("its not a value")
        }
        
    
    

    
    //alert("Your score is" + score);
    intro.style.display = "none";
    board.style.display ="block"
    board.innerHTML = "your score is " + score + " " +"out of 100"+ " " +performance;
    all.style.display = "none"
}

//Performance output
function Performance(score){
 
    switch (score) {
        case 75:
            ("great")
            break;
        case y:
            // execute case y code block
            break;
        default:
            // execute default code block
    }
}
