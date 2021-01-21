export class Question{
    correctAnswer: string;
    question:string;
    answers:string[];
    isAnsweredTF: boolean;
    isCorrectTF: boolean;
}
export class Questions {
    questions: Question[];
}