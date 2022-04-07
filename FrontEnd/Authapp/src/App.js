import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./Components/LoginForm";
import SignupFrom from "./Components/SignupForm";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupFrom />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
