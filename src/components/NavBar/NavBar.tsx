import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const handleAddQuiz = () => {
    navigate('/add-quiz');
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Button variant="contained" onClick={handleAddQuiz}>Add Quiz</Button>
      </div>
    </nav>
  );
};
export default NavBar;
