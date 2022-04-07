import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Nav from "../Nav";
import "./index.css";

function SignupFrom() {
  const navigate = useNavigate();

  const [email, changeEmail] = useState("");
  const [name, changeName] = useState("");
  const [password, changePassword] = useState("");
  const [rePassword, changeRePassword] = useState("");

  const bodyData = {
    name,
    email,
    password,
    rePassword,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  const formSubmission = async function (e) {
    e.preventDefault();
    const response = await fetch("/user/log/signUp", options);
    const dataResponse = await response.json();
    // console.log(dataResponse);
    const { statusCode, error } = dataResponse;
    if (statusCode === 401) {
      return window.alert(`${error}`);
    }
    if (statusCode === 422) {
      if (error !== "Email exists") {
        window.alert("* Necessary !");
      } else {
        window.alert("Email exists");
      }
    } else {
      window.alert("Success");
      navigate("/", { replace: true });
    }
  };
  return (
    <>
      <Nav />
      <div className="nav_route">
        <div className="log_card_signup">
          <form className="form_card_signup" onSubmit={formSubmission}>
            <label htmlFor="user" className="label_tag">
              FullName
            </label>
            <input
              id="user"
              className="form_in"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => changeName(e.target.value)}
              value={name}
            />
            <label htmlFor="email" className="label_tag">
              Email
            </label>
            <input
              id="email"
              className="form_in"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => changeEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="pswd" className="label_tag">
              Password
            </label>
            <input
              id="pswd"
              className="form_in"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => changePassword(e.target.value)}
              value={password}
            />
            <label htmlFor="checkin" className="label_tag">
              Confirm Password
            </label>
            <input
              id="checkin"
              className="form_in"
              type="password"
              placeholder="Re-enter Password"
              onChange={(e) => changeRePassword(e.target.value)}
              value={rePassword}
            />
            <div className="btns">
              <button type="submit" className="sign_btn">
                Signup
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="submit_btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFrom;
