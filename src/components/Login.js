import React from "react";
// useDispatch is used for modifying values of state
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Sally", age: 38, email: "whatever@yamam.com" })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
