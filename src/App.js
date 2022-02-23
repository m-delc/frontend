import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import MenuAppBar from "./components/MenuAppBar/MenuAppBar";

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <LoginForm />
    </div>
  );
}

export default App;
