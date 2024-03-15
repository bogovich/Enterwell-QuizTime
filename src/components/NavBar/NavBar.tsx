import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Button from '@mui/material/Button';

const NavBar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddQuiz = () => {
    navigate('/add-quiz');
  }

  const shouldHideButton = location.pathname.includes('/show-quiz/');

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        {!shouldHideButton && <Button variant="contained" onClick={handleAddQuiz}>Add Quiz</Button>}
      </div>
    </nav>
  );
};
export default NavBar;
