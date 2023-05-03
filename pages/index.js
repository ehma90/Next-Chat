import React, { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    if (username.length === 0 || username.length === 0) return;

    axios
      .put(
        "https://api.chatengine.io/users",
        {
          username,
          secret,
        },
        { headers: { "Private-key": "2d5f661f-492e-49c4-b824-8c46e32c940c" } }
      )
      .then((res) => {
        router.push("/chats");
      });
  };
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Login to chat</div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button className="submit-button" type="submit">
            Login/ Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
