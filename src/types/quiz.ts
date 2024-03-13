export interface Question {
    id: number;
    question: string;
    answer: string;
}

export interface Quiz {
    id: number;
    name: string;
    questions: Question[];
}