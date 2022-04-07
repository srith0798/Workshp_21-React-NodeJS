import Cookies from "js-cookie";
import Header from "../Header";
import { Navigate } from "react-router-dom";
import "./index.css";

function Home() {
  const getToken = Cookies.get("jwt_Token");

  if (getToken === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div className="home_body">
        <div className="card_head">
          <h1 className="head">Hello</h1>
          <p className="head_text">
            We welcome you to the Form Auth. Experience the secure mode of
            authentication through us. Lets dive into the world of security with
            your valuable feedback...!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
