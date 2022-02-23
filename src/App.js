import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Profile /> 
      <Login />
    </div>
  );
}

export default App;
