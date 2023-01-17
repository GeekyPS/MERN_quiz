import "./SideBar.css";
import image from "../../assets/white-logo.png";
import exams from "../../assets/exams.png"

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-column">
        <img src={image} alt="quizlyfi logo" className="logo" />
        <div className="menu-items">
          <div className="create-quiz">Create Quiz</div>
          <div className="attempt-quiz">Attempt Quiz</div>
          <div className="attempt-quiz">Logout</div>
        </div>
        <img src={exams} alt="exam logo" className="exam-logo"/>

        
      </div>
    </div>
  );
};

export default SideBar;
