import React from "react";
import { Button, TextField } from "@mui/material";
import { VpnKeyOutlined } from "@mui/icons-material";

export const Reset_Password = () => {
  const [email, setEmail] = React.useState("");
  const [id, setId] = React.useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleIdChange = (e) => setId(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Id:", id);
  };
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="grid grid-flow-row text-center" onSubmit={handleSubmit}>
        <div className="flex justify-center p-3">
          <VpnKeyOutlined sx={{ color: "#344054" }} />
        </div>
        <text className="text-app-Teal text-2xl font-bold ">
          Reset a password
        </text>

        <div className="grid grid-flow-row text-left mt-5">
          <TextField
            size="small"
            placeholder="Enter your User Id"
            type="number"
            value={id}
            onChange={handleIdChange}
            style={{ width: 280 }}
          />
        </div>
        <div className="grid grid-flow-row text-left mt-5">
          <TextField
            size="small"
            placeholder="Enter Your register Mail Id"
            type="email"
            value={email}
            onChange={handleEmailChange}
            style={{ width: 280 }}
          />
        </div>

        <Button
          variant="contained"
          type="submit"
          style={{ color: "white", backgroundColor: "#008080", marginTop: 20 }}>
          Continue
        </Button>
      </form>
    </div>
  );
};
