export class Quiz{
    constructor(category,difficulty,numberofquestion){
        this.category=category;
        this.difficulty=difficulty;
        this.numberofquestion=numberofquestion;
        this.score=0;
    }
    async getAllQuestions(){
        let response=await fetch(`https://opentdb.com/api.php?amount=${this.numberofquestion}&category=${this.category}&difficulty=${this.difficulty}`);
        let questions=await response.json();
        console.log(questions.results);
        
        return questions.results
    }
}