import { observer } from "mobx-react-lite";
import QuizListTable from "./QuizListTable/QuizListTable";
import {useQuizListActions} from "../../hooks/useQuizListActions"
import {useFetchQuizzes} from "../../hooks/useFetchQuizzes";
import styles from "./QuizListView.module.scss";

const QuizListView = observer(() => {

  const { quizzes, error } = useFetchQuizzes();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { handleEdit, handleShow, handleDelete } = useQuizListActions();


  return (
    <div className={styles.container}>
      <h1>QuizTime <span className="quiz-author">by Rejd</span></h1>
      <QuizListTable
        data={quizzes}
        handleEdit={handleEdit}
        handleShow={handleShow}
        handleDelete={handleDelete}
      />
    </div>
  );
});

export default QuizListView;
