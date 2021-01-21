import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { Question } from '../model/questions.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // questions: Question[];
  @Input() type?: string;
  index: number;
  currentQuestion: Question;
  isCorrectTF: boolean;
  newQuestion: Question = new Question();
  constructor(public questionsService: QuestionsService) {
    // this.getQuestions(this.type);
  }
  ngOnInit(): void {
    this.currentQuestion = this.questionsService.currentQuestion;
    // console.log(this.currentQuestion)
  }
  GetQuestions(type: string): void {
    this.questionsService.GetQuestions(type);
  }
  Restart(): void {
    if (this.type === undefined) {
      this.questionsService.GetQuestions('');

    } else {
      this.questionsService.GetQuestions(this.type);
    }
  }
  saveQuestion(): void {
    this.newQuestion.correctAnswer = 'Testing';
    this.newQuestion.answers = ['Testing', 'Stop', 'Never', 'Huh'];
    this.newQuestion.isAnsweredTF = false;
    this.newQuestion.isCorrectTF = false;
    this.newQuestion.question = 'Am I able to see this?';
    this.questionsService.saveQuestion(this.newQuestion, '');
  }
}
