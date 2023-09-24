import React from "react";
import { logInWithGoogle } from "../utils/Login";

export default function Login(props) {
  return (
    <div>
      <div className="p-2 rounded-md">
        <button
          onClick={() => {
            logInWithGoogle();
          }}
          className="uppercase p-2 rounded-md bg-red-600"
        >
          Login with google
        </button>
      </div>
    </div>
  );
}
