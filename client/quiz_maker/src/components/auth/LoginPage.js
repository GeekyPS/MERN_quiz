import LoginCard from "./LoginCard";
import LoginHeader from "./LoginHeader";
import styles from './LoginPage.module.css'

import image from "../../assets/login.svg";

const LoginPage = () => {
  return (
    <div className={styles.body}>
      <LoginHeader></LoginHeader>
      <div className={styles["main-component"]}>
        <LoginCard page='login'></LoginCard>
        <img src={image} alt="login info" className={styles["login-photo"]} />
      </div>
    </div>
  );
};

export default LoginPage;
