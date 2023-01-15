import LoginCard from "./LoginCard";
import LoginHeader from "./LoginHeader";
import "./LoginPage.css";
import image from "../assets/login.svg";

const LoginPage = () => {
  return (
    <div className="body">
      <LoginHeader></LoginHeader>
      <div className="main-component">
        <LoginCard></LoginCard>
        <img
            src={image}
          alt="login info"
          className="login-photo"
        />
      </div>
    </div>
  );
};

export default LoginPage;
