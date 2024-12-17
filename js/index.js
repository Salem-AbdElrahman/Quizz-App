import { Question } from './question.js';
import {Quiz} from './quiz.js';
const category=document.getElementById('categoryMenu');
const difficulty=document.getElementById('difficultyOptions');
const numberofquestion=document.getElementById('questionNumbers');
const startBtn=document.getElementById('startQuiz');
const quizOptions=document.getElementById('quizOptions')
quizOptions.addEventListener("submit",function (e){
    e.preventDefault();
})
export let questions;
export  let quiz;
startBtn.addEventListener('click',async()=>{
     quiz=new Quiz(category.value , difficulty.value , numberofquestion.value);
    questions= await quiz.getAllQuestions();
    quizOptions.classList.add('d-none');
    let question=new Question(0);
        question.displayQuestions()
})