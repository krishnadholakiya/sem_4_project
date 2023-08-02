import ReactDOM from "react-dom";
import { BrowserRouter,Route, Routes } from "react-router-dom";


import Header from "../src/pages/Heading";
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";
import Subscribe from "../src/pages/Subscribe";

ReactDOM.render(
  <div class="bodybg">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}></Route>
        <Route path="/Signin" element={<Signin/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Subscribe" element={<Subscribe/>}></Route>
    </Routes>
  </BrowserRouter>
  </div>,
  document.getElementById("root")
  )