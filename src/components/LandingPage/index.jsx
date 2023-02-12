import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <div className={styles.welcomeBox}>
          <h1>Welcome to my weather app</h1>
          <Link to="/home">
            <button className={styles.button}>Let's start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
