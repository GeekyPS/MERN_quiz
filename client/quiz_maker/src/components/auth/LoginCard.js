import { useState } from "react";

import styles from "./LoginCard.module.css";
import linkedin from "../../assets/linkedin.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import axios from "axios";

const LoginCard = (props) => {
  const [isEmailValid, changeisEmailValid] = useState(true);
  const [isPasswordValid, setisPasswordValid] = useState(true);
  const [isUserValid,setIsUserValid]= useState(true);

  var userInvalidMessage = '';

  const isValidEmail = (event) => {
    const email = event.target.value;
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      changeisEmailValid(false);
    } else {
      changeisEmailValid(true);
    }
  };

  const isValidPassword = (e) => {
    const password = e.target.value;
    password.length > 8 ? setisPasswordValid(true) : setisPasswordValid(false);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isEmailValid || !isPasswordValid || !email || !password) {
      console.log("empty");
      return;
    }
    var res;
    try
    { res = await axios
      .post("http://localhost:7800/login", {
        email: email,
        password: password,
      })
      // .then((data) => {
      //   console.log('before data')
      //   console.log(data);
      //   console.log("data stored");
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
    }catch(e){
      // userInvalidMessage = `${e.response.data.error}`;

      console.log(`user is not valid with ${userInvalidMessage}`);
      setIsUserValid(false);
    }
      console.log(res);
  };

  return (
    <form name="login-form" onSubmit={loginHandler}>
      <div className={styles["login-card"]}>
        <h1>Login</h1>

        <div className={styles.auths}>
          <div className={styles["logo-box"]}>
            <img
              src={linkedin}
              alt="linkedin"
              className={styles["auth-logo"]}
            ></img>
          </div>
          <div className={styles["logo-box"]}>
            <img
              src={facebook}
              alt="facebook"
              className={styles["auth-logo"]}
            ></img>
          </div>
          <div className={styles["logo-box"]}>
            <img
              src={google}
              alt="google"
              className={styles["auth-logo"]}
            ></img>
          </div>
        </div>

        <span className={styles.or}>or</span>
        <input
          type="email"
          name="email"
          className={`${styles["text-field"]} ${styles["email-field"]}`}
          placeholder="email address"
          onChange={isValidEmail}
        />
        {!isEmailValid ? (
          <span className={styles.invalid_text}>Enter a valid email Id</span>
        ) : (
          ""
        )}
        <input
          type="password"
          name="password"
          className={`${styles["text-field"]} ${styles["password-field"]} ${styles.invalid}`}
          placeholder="password"
          onChange={isValidPassword}
        />
        {!isPasswordValid ? (
          <span className={styles.invalid_text}>
            Password must be atleast 8 characters long
          </span>
        ) : (
          ""
        )}

        <div className={styles["remember-row"]}>
          <div className={styles.remember}>
            <input type="checkbox" className={styles.check} />
            <span className={styles["text-remember"]}>Remember me</span>
          </div>
          <a href="godo" className={styles["text-forgot"]}>
            Forgot Password ?
          </a>
        </div>
        <input
          type="submit"
          value="Login"
          className={`${styles["btn"]} ${styles["btn-fill"]}`}
        ></input>

        {!isUserValid ? (
          <strong>{`${userInvalidMessage}`}</strong>
          
          // <span className={styles.invalid_text}>{isPasswordValid}</span>
        ) : (
          ""
        )}

        <div className={styles["signup-row"]}>
          <span>Don't have an account?</span>
          <a href="google.com">Signup</a>
        </div>
      </div>
    </form>
  );
};

export default LoginCard;
