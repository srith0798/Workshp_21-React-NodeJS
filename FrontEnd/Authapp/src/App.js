import { BrowserRouter, Routes, Route } from "react-router-dom";
import configStore from "./Store/store";
import { Provider } from "react-redux";
import LoginForm from "./Components/LoginForm";
import SignupFrom from "./Components/SignupForm";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <Provider store={configStore}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupFrom />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
