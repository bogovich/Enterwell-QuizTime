import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigation } from "../../hooks/useNavigation";

const NavBar = () => {
  const { handleAddQuiz, shouldHideButton } = useNavigation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="/">
              <IconButton color="primary" size="large">
                <HomeIcon />
              </IconButton>
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.quizNavbar}>QuizTime <span className="quiz-author">by Rejd</span></Link>
          </li>
        </ul>
        {!shouldHideButton && (
          <Button variant="contained" size="medium" onClick={handleAddQuiz}>
            Add Quiz
          </Button>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
