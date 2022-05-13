
//Start Fuction
let start = document.querySelector('.start');
let quiz = document.querySelector('.questions');
let welcome = document.querySelector('.head');
let quiz1 = document.querySelector('#qn1');
let quiz2 = document.querySelector('#qn2');
let all = document.querySelector('.all');
//display block


//function hide and display elements
function startQuiz(){
    all.style.display ="block";
    welcome.style.display ="none";
   
}
//function onclicknext
function next(id){
    all.style.display = "none"
}


//results functions

function results(){
    let score = 0;
    if (document.getElementById('choiceCorrect1').checked);{
        score++
    }
    if (document.getElementById('choiceCorrect2').checked);{
        score++
    }
    if (document.getElementById('choiceCorrect3').checked);{
        score++
    }
    alert("Your score is" + score);

}