import React from "react";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import bg1 from "../../assets/images/Bg1.png";

export const LandingPage = () => {
  const [radio, setRadio] = React.useState("client");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("radio :" + radio);
    console.log("email :" + email);

    if (radio === "client") {
      navigate("/client");
    } else if (radio === "candidate") {
      navigate("/aboutassigment");
    }
  };

  return (
    <div className="flex justify-center  h-screen  items-center">
      <div className="absolute top-0 left-0 ">
        <img src={bg1} alt="back img" style={{ width: 500 }} />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <img src={bg1} alt="back img" style={{ width: 500 }} />
      </div>
      <div className="grid grid-flow-col mx-52  fixed bg-white justify-center  p-10 rounded-lg">
        <div className="flex justify-center p-16">
          <img src={logo} alt="logo" style={{ width: 250, height: 250 }} />
        </div>
        <div className="border border-app-Teal grid grid-flow-row text-center gap-5 rounded-md p-5">
          <p className="text-app-Teal font-semibold text-xl mt-5">
            Take the Assessment
          </p>
          <p className="text-app-Teal ">
            Thanks for the interest in this position. Please <br /> provide your
            email address and we will send you <br /> more information by email
            with link to the assessment
          </p>
          <form
            className="px-10 grid grid-flow-row gap-4 my-3"
            onSubmit={handleClick}>
            <div className="flex justify-center">
              <RadioGroup
                row
                value={radio}
                defaultValue={"client"}
                onChange={(e) => setRadio(e.target.value)}
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                sx={{ color: "#008080" }}>
                <FormControlLabel
                  value="client"
                  control={<Radio sx={{ color: "#008080" }} />}
                  label="Client"
                />
                <FormControlLabel
                  value="candidate"
                  control={<Radio sx={{ color: "#008080" }} />}
                  label="Candidate"
                />
              </RadioGroup>
            </div>
            <TextField
              size="small"
              type="email"
              required
              value={email}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="olivia@untitledui.com"
              style={{ width: 300 }}
              InputProps={{
                endAdornment: <EmailOutlined sx={{ color: "#008080" }} />,
              }}
            />
            <div className="flex justify-center">
              <Button
                variant="outlined"
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#008080",
                  marginTop: 10,
                }}>
                Send Invite
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
