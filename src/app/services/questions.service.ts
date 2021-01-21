import { Injectable } from '@angular/core';
import { Question, Questions } from 'src/app/model/questions.model';
import { AngularFirestoreModule, DocumentSnapshot, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  currentQuestions: Question[];
  currentQuestion: Question;
  answeredQuestions: Question[] = [];
  currentIndex: number;
  wrongAnswers: number;
  rightAnswers: number;
  points: number;

  constructor(private firestore: AngularFirestore) {
    this.GetQuestions('Journalism');
  }
  GetQuestions(type: string) {
    const ret = this.firestore.collection('FBLA').doc(type + 'Questions').get();
    ret.subscribe(res => {
      if (res.exists) {
        const questions = (res.data());
        this.currentQuestions = questions.questions;
        console.log(this.currentQuestions);
        if (this.currentQuestions) {
          this.wrongAnswers = 0;
          this.rightAnswers = 0;
          this.points = 0;
          this.currentQuestion = new Question();
          this.currentQuestion = this.SetCurrentQuestion();
        } else {
          this.currentQuestions = [];
          console.log(this.currentQuestions);
        }
      } 
    }
      , err => {
        console.log('Something went wrong while getting ' + type + 'questions', err);
      });
  }
  SetCurrentQuestion(): Question {
    const randomIndex = Math.floor(Math.random() * (this.currentQuestions.length - .5));
    this.currentIndex = randomIndex;
    return this.currentQuestions[this.currentIndex];

  }
  GetResult(answer: string) {
    if (answer === this.currentQuestion.correctAnswer) {
      console.log('You are correct! You gained a point.'); // maybe questions have a difficulty rating or points given
      this.rightAnswers++;
      this.points++;
      this.currentQuestion.isCorrectTF = true;
    } else {
      console.log('You got it wrong. The correct answer was: ', this.currentQuestion.correctAnswer);
      this.wrongAnswers++;
      this.currentQuestion.isCorrectTF = false;
    }
    this.currentQuestion.isAnsweredTF = true;
  }
  NextQuestion(){
    this.currentQuestions.splice(this.currentIndex, 1);
    this.currentQuestion = this.SetCurrentQuestion();
  }
  saveQuestion(question: Question, questionType: string) {
    const q = new Questions();
    this.currentQuestions.push({...question});
    // if (this.currentQuestions) {
    //   this.currentQuestions.push({...question});
    // } else {
    //   this.currentQuestions = [];
    //   this.currentQuestions.push({...question});
    // }
    q.questions = this.currentQuestions;
    console.log(this.currentQuestions);
    const questions = {...q};
    const ret = this.firestore.collection('FBLA').doc(questionType + 'Questions')
      .set(questions, { merge: true })
      .then(res => {
        console.log('Saved question: result', res);
      })
      .catch(err => {
        console.log('Could not save question', err);
      });
  }
  // makeQuestionIntoSimpleObject(question: Question) {
  //   const questions = [];
  //   this.currentQuestions.forEach(question =>{

  //   })
  // }
}
