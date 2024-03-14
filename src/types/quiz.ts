export interface BaseQuestion {
    question: string;
    answer: string;
}

export interface IncomingQuestion extends BaseQuestion {
    id: number;
}

export interface OutgoingQuestion extends BaseQuestion {
    id?: number;
}

export interface UpdateQuiz {
    id: number;
    name: string;
    questions: OutgoingQuestion[];
}


export interface IncomingQuiz {
    id: number;
    name: string;
    questions: IncomingQuestion[];
}

export interface OutgoingQuiz {
    id ?: number;
    name: string;
    questions: OutgoingQuestion[];
}
export type QuizListActionProps = {
    handleEdit: () => void;
    handleShow: (id: number) => (event: React.MouseEvent) => void;
    handleDelete: (id: number) => (event: React.MouseEvent) => void;
};

export type QuizFormType = OutgoingQuiz | UpdateQuiz;