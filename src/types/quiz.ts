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

export type QuizListActionProps = {
    handleEdit: () => void;
    handleShow: (id: number) => (event: React.MouseEvent) => void;
    handleDelete: (id: number) => (event: React.MouseEvent) => void;
};