import image from "../../assets/logo-no-background.png";
import styles from "./LoginHeader.module.css";

const LoginHeader = () => {
  return (
    <div className={styles.header}>
      <img src={image} alt="logo of the quizlyfy" className={styles.logo} />

      <div className={styles.buttons}>
        <button className={`${styles["btn"]} ${styles["btn-fill"]}`}>
          Login
        </button>
        <button className={`${styles["btn"]} ${styles["btn-outline"]}`}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default LoginHeader;
