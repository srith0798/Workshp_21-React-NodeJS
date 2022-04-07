import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Cookies from "js-cookie";
import "./index.css";

function LoginForm() {
  const navigate = useNavigate();
  // State Methods
  const [name, changeUser] = useState("");
  const [password, changePswd] = useState("");
  // Post Data through API
  const dataObj = {
    userMail: name,
    userPassword: password,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  };
  async function formSubmit(event) {
    event.preventDefault();
    console.log(name, password);
    const response = await fetch("/user/log", options);
    const dataResponse = await response.json();
    const { statusCode, error, msg, tokenList } = dataResponse;

    if (statusCode === 201) {
      const { token } = tokenList[tokenList.length - 1];
      window.alert(msg);
      Cookies.set("jwt_Token", token, { expires: 1, path: "/" });
      navigate("/home", { replace: true });
    } else if (statusCode === 400) {
      window.alert(error);
    }
    if (statusCode === 422) {
      window.alert(error);
    }
    switch (statusCode) {
      case "400":
        break;
      case "422":
        console.log(400);
        window.alert(error);
        break;
      case 402:
        window.alert(error);
        break;
      default:
        break;
    }
  }

  const jwtToken = Cookies.get("jwt_Token");
  if (jwtToken !== undefined) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Nav />
      <div className="nav_route">
        <div className="log_card">
          <form className="form_card" onSubmit={formSubmit}>
            <label className="label_tag">UserMail</label>
            <input
              id="user"
              className="form_in"
              type="text"
              placeholder="Enter user_mail"
              onChange={(e) => changeUser(e.target.value)}
              value={name}
            />
            <label className="label_tag">Password</label>
            <input
              id="pswd"
              className="form_in"
              type="password"
              placeholder="Enter password"
              onChange={(e) => changePswd(e.target.value)}
            />
            <button type="submit" className="submit_btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
