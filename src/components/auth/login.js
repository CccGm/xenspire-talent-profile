import React from "react";
import { Button, TextField } from "@mui/material";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="grid grid-flow-row text-center" onSubmit={handleSubmit}>
        <text className="text-app-Teal text-2xl font-bold">
          Log in to your account
        </text>
        <span className="text-app-Teal text-sm">
          Welcome back! Please enter your details.
        </span>
        <div className="grid grid-flow-row text-left mt-5">
          <lable className="text-app-text py-2">Email</lable>
          <TextField
            size="small"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="grid grid-flow-row text-left mt-3">
          <lable className="text-app-text py-2">Password</lable>
          <TextField
            size="small"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="grid grid-flow-col gap-10 my-5 items-center">
          <div>
            <input type="checkbox" id="remember" />
            <text htmlFor="remember" className="pl-2 text-sm">
              Remember for 30 days
            </text>
          </div>

          <a href="/forgotPass" className="text-app-Teal font-bold text-sm">
            Forgot password?
          </a>
        </div>

        <Button
          variant="contained"
          type="submit"
          style={{ color: "white", backgroundColor: "#008080" }}>
          Sign in
        </Button>

        <p className="mt-5 text-app-Teal">
          Don’t have an account?{" "}
          <a href="/" className="font-bold">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};
