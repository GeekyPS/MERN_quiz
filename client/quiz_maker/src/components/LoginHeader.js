import image from "../assets/logo-no-background.png";
import "./LoginHeader.css";


const LoginHeader = () => {
  return (
    <div className="header">
      <img src={image} alt="logo of the quizlyfy" className="logo" />

      <div className="buttons">
        <button className="btn btn-fill">Login</button>
        <button className="btn btn-outline">Signup</button>
     
      </div>
    </div>
  );
};

export default LoginHeader;


