import styles from "./QuestionAnswerPair.module.scss";
import { useState } from "react";

type QuestionAnswerPairProps = {
  question: string;
  answer: string;
};

const QuestionAnswerPair = ({ question, answer }: QuestionAnswerPairProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  return (
    <div className={styles.questionAnswerPair}>
      <div className={styles.question}>{question}</div>
      {isAnswerVisible && <div className={styles.answer}>{answer}</div>}
      <button className={styles.showBtn} onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
        Show answer
      </button>
    </div>
  );
};

export default QuestionAnswerPair;
