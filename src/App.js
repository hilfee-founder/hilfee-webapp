import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Auth/Login.js';
import Signup from './Components/Auth/Signup.js';
import Layout from "./Components/Layout/layout.js";
import Home from "./Components/Home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact index element={<Home />} />


          {/* Auth Routes   */}
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
