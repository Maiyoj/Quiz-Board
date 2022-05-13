
//Start Fuction
let start = document.querySelector('.start');
let quiz = document.querySelector('.questions');
let welcome = document.querySelector('.head')

//hide questions
quiz.style.display = "none";

//function hide and display elements
function startQuiz(){
    quiz.style.display ="block";
    welcome.style.display ="none";
}