const questions=[
    {
        question:"which is largest animal in the world?",
        answer:[
            {text:"shark", correct: false},
            {text:"Elephant", correct: false},
            {text:"Blue whale", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
        question:"which is the smallest contient in the world?",
        answer:[
            {text:="Asia", correct: false},
            {text:"Australia", correct: false},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
    {
        question:"which is largest animal in the world?",
        answer:[
            {text:"shark", correct: false},
            {text:"Elephant", correct: false},
            {text:"Blue whale", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
];
const questionElement=document.getElementsByClassName( "question"); 
const answerbutton=document.getElementsByClassName( "answer-buttons"); 
const nextbutton=document.getElementsByClassName( "next-btn"); 


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHtml="Next"
    showQuestion();
}
function showQuestion(){
    
}