import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Auth/Login.js';
import Signup from './Components/Auth/Signup.js';
import Layout from "./Components/Layout/layout.js";
import Home from "./Components/Home.js";
import Profile from "./Components/Profile.js";
import Hrlogin from "./Components/Hr/Hrlogin.js";
import Hrsignup from "./Components/Hr/Hrsignup.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact index element={<Home />} />


          {/* Auth Routes   */}
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>

          <Route exact path="/hrlogin" element={<Hrlogin />}></Route>
          <Route exact path="/hrsignup" element={<Hrsignup />}></Route>


        
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
