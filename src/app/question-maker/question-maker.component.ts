import { Component, OnInit } from '@angular/core';
import { Question } from '../model/questions.model';
import { QuestionMakerService } from 'src/app/services/question-maker.service';
import { createInput } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms'
import { QuestionsService } from '../services/questions.service';



@Component({
  selector: 'app-question-maker',
  templateUrl: './question-maker.component.html',
  styleUrls: ['./question-maker.component.css']
})

export class QuestionMakerComponent implements OnInit {
  //currentQuestions: Question[];
  //newQuestion:Question;
  

  currentQuestion: Question = new Question;

  currentType: string; 

  constructor(public questionMakerService:QuestionMakerService, public questionService: QuestionsService) {
    
    this.currentQuestion.answers = ['']; 
    
    // THis is what your function should do then call the printQuestion function.
    //After printing, just imagine that it has been saved and just set the new question = to new Question(); and reset the process again. 


  }

  ngOnInit(): void {

  }

  addNewAnswer() {
    this.currentQuestion.answers.push(''); 
  }

  saveQuestion() {
    this.currentQuestion.isAnsweredTF = false;
    this.currentQuestion.isCorrectTF = false; 
    console.log('current question: ' , this.currentQuestion);
    this.currentQuestion.answers.shift(); 
    this.questionService.saveQuestion(this.currentQuestion, this.currentType);
    this.currentQuestion = new Question();
    this.currentQuestion.answers = [''];  
  }

  // PrintAllQuestions() {
  // this.currentQuestions.forEach(question => {
  //  console.log(question);
  //  })
  //  }
  // PrintQuestion() {
  //   console.log("This question has been saved in the database: ",this.newQuestion);
  // }
}

