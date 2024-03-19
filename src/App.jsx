import { useState } from "react";
import "./App.css";
import Signup from "./components/formvalidation/Signup";

import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
    </Routes>
  );
}

export default App;
