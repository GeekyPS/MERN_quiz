import LoginPage from "./components/auth/LoginPage";
// import axios from "axios";

const App = () => {
  // axios
  //   .post(
  //     "http://localhost:7800/login",
  //     {
  //       fname: "priyanshu",
  //       lname: "choudhary",
  //       email: "abc@gmail.com",
  //       password: "hi there",
  //     },
  //     { withCredentials: true }
  //   )
  //   .then((data) => {
  //     console.log(data.data);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
  return <LoginPage></LoginPage>;
};

export default App;
