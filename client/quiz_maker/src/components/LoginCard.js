import "./LoginCard.css";
import linkedin from "../assets/linkedin.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import axios from "axios";

const LoginCard = (props) => {
  const loginHandler = async () => {
    axios.post("http://localhost:5400/register", {
      fname: "priyjkkjn",
      lname: "srivastava",
      email: "abc@gmail.com",
      password: "hi there",
    }).then(()=>{
      console.log('data stored')
    }).catch(e=>{
      console.log(e);
    });
  };

  return (
    <div className="login-card">
      <h1>Login</h1>
      <div className="auths">
        <div className="logo-box">
          <img src={linkedin} alt="linkedin" className="auth-logo"></img>
        </div>
        <div className="logo-box">
          <img src={facebook} alt="facebook" className="auth-logo"></img>
        </div>
        <div className="logo-box">
          <img src={google} alt="google" className="auth-logo"></img>
        </div>
      </div>
      <span className="or">or</span>
      <input
        type="email"
        className="text-field email-field"
        placeholder="email address"
      />
      <input
        type="password"
        className="text-field password-field"
        placeholder="password"
      />

      <div className="remember-row">
        <div className="remember">
          <input type="checkbox" className="check" />
          <span className="text-remember">Remember me</span>
        </div>
        <a href="godo" className="text-forgot">
          Forgot Password ?
        </a>
      </div>
      <button className="btn btn-fill" onClick={loginHandler}>
        Login
      </button>
      <div className="signup-row">
        <span>Don't have an account?</span>
        <a href="google.com">Signup</a>
      </div>
    </div>
  );
};

export default LoginCard;
