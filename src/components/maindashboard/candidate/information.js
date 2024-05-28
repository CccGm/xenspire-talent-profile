import React, { useState } from "react";
import {
  EmailOutlined,
  LogoutOutlined,
  ModeOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import axios from "axios";
import { CandidateSideNav } from "../../widgets/candidateSideNav";
import logo2 from "../../../assets/images/xenspire-logo 1.png";

export const CandidateInformation = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [phoneNO, setPhoneNO] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [pinCode, setPinCode] = useState();
  const [area, setArea] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [lookingJob, setLookingJob] = useState(false);

  const [countryList, setCountryList] = useState([
    "gujarat",
    "mumbai",
    "chhenai",
    "delhi",
  ]);

  const [stateList, setStateList] = useState([
    "gujarat",
    "mumbai",
    "chhenai",
    "delhi",
  ]);

  const handleSubmit = async () => {
    console.log(
      firstName,
      lastName,
      dob,
      email,
      phoneNO,
      country,
      state,
      pinCode,
      area,
      aboutMe,
      lookingJob
    );
    await axios
      .post("localhost:3000", {
        firstName,
        lastName,
        dob,
        email,
        phoneNO,
        country,
        state,
        pinCode,
        area,
        aboutMe,
        lookingJob,
      })
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="min-h-screen bg-app-lightBlue w-full flex">
      <CandidateSideNav />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#ffffff",
          px: 3,
          py: 1,
        }}>
        <div className="flex justify-between items-center">
          <div className="items-center flex gap-2">
            <img src={logo2} alt="logo" />
            <p style={{ color: "#1470A1", fontWeight: 800, fontSize: 16 }}>
              Xenspire Talent
            </p>
          </div>

          <div className="mr-3">
            <div className="grid grid-flow-col gap-2 justify-between">
              <div className="mr-1 w-6 rounded-full">
                <img
                  src={"https://picsum.photos/200/300.webp"}
                  className="rounded-full"
                  alt="avtar"
                />
              </div>
              <div className="grid grid-flow-row ">
                <text style={{ fontSize: 12, color: "#000000" }}>testUser</text>
                <text style={{ fontSize: 12, color: "#6C737F" }}>test@123</text>
              </div>
              <IconButton onClick={() => console.log("logout")}>
                <LogoutOutlined sx={{ color: "#9AA1B4" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </AppBar>
      <div className="pt-20 w-full px-14 pb-10">
        <Card sx={{ borderRadius: 5, py: 2, mt: 2, px: 5 }}>
          <div className="flex justify-between items-center">
            <p className="text-app-green text-2xl font-semibold">
              Basic Details
            </p>
            <Button
              variant="outlined"
              startIcon={<ModeOutlined />}
              style={{ color: "#729434", borderColor: "#729434" }}
              onClick={() => console.log("edit Click")}>
              Edit
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-6">
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>First Name</p>
              <TextField
                size="small"
                placeholder="Enter First Name"
                name="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>Last Name</p>
              <TextField
                size="small"
                placeholder="Enter Last Name"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>DOB</p>
              <TextField
                type="date"
                size="small"
                placeholder="Dath Of Birth"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>Email</p>
              <TextField
                type="email"
                size="small"
                placeholder="Enter Email"
                name="email"
                value={email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined sx={{ color: "#B1B2B2" }} />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setEmail(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>Phone Number</p>
              <TextField
                type="tel"
                size="small"
                placeholder="Enter Phone Number"
                name="phoeNO"
                value={phoneNO}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneOutlined sx={{ color: "#B1B2B2" }} />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setPhoneNO(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>Country</p>
              <Autocomplete
                size="small"
                value={country}
                onChange={(e, value) => setCountry(value)}
                options={countryList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select Country" />
                )}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>State</p>

              <Autocomplete
                size="small"
                value={state}
                onChange={(e, value) => setState(value)}
                options={stateList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select State" />
                )}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>Pin Code</p>
              <TextField
                type="number"
                size="small"
                placeholder="Enter Pin Code"
                name="pincode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>Area</p>
              <TextField
                size="small"
                placeholder="Enter Area"
                name="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
          </div>
          <div className="grid grid-flow-row gap-1 mt-10">
            <p style={{ color: "#57595A", fontWeight: 500 }}>About Me</p>
            <textarea
              placeholder="Enter"
              value={aboutMe}
              onChange={(e) => setAboutMe(e.target.value)}
              rows={4}
              style={{
                borderWidth: 1,
                borderColor: "#D2D3D3",
                borderRadius: 6,
                maxWidth: 691,
                minHeight: 100,
                padding: 8,
                marginBottom: 10,
              }}
            />
            <FormControlLabel
              checked={lookingJob}
              onChange={(e) => setLookingJob(e.target.checked)}
              control={<Checkbox />}
              label="Looking for job"
            />
          </div>
        </Card>
        <div className="flex justify-end my-5">
          <Button
            variant="contained"
            style={{ backgroundColor: "#729434" }}
            onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
