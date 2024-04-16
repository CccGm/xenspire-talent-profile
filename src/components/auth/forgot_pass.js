import React from "react";
import { Button, TextField } from "@mui/material";
import { ArrowBackOutlined, VpnKeyOutlined } from "@mui/icons-material";

export const Forgot_Pass = () => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="grid grid-flow-row text-center" onSubmit={handleSubmit}>
        <div className="flex justify-center p-3">
          <VpnKeyOutlined sx={{ color: "#344054" }} />
        </div>
        <text className="text-app-Teal text-2xl font-bold ">
          Forgot password?
        </text>
        <span className="text-app-Teal text-sm mt-3">
          No worries, we’ll send you reset instructions.
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

        <Button
          variant="contained"
          type="submit"
          style={{ color: "white", backgroundColor: "#008080", marginTop: 20 }}>
          Reset password
        </Button>

        <a href="/auth/login" className="text-app-Teal mt-5">
          <ArrowBackOutlined /> Back to log in
        </a>
      </form>
    </div>
  );
};
