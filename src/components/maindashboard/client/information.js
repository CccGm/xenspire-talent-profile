import React, { useState } from "react";
import {
  EmailOutlined,
  LanguageOutlined,
  LogoutOutlined,
  ModeOutlined,
  PhoneOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import axios from "axios";
import { ClientSideNav } from "../../widgets/clientSideNav";
import logo2 from "../../../assets/images/xenspire-logo 1.png";

export const ClientInformation = () => {
  const [compnayName, setCompanyName] = useState();
  const [establish, setEstablish] = useState();
  const [email, setEmail] = useState();
  const [phoneNO, setPhoneNO] = useState();
  const [web, setWeb] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [pinCode, setPinCode] = useState();
  const [area, setArea] = useState();
  const [aboutCompany, setAboutCompany] = useState();

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
    await axios
      .post("localhost:3000", {
        compnayName,
        establish,
        email,
        web,
        phoneNO,
        country,
        state,
        pinCode,
        area,
        aboutCompany,
      })
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <div className="min-h-screen bg-app-lightBlue w-full flex">
      <ClientSideNav />
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
                <p style={{ fontSize: 12, color: "#000000" }}>testUser</p>
                <p style={{ fontSize: 12, color: "#6C737F" }}>test@123</p>
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
              <p style={{ color: "#57595A", fontWeight: 500 }}>Comnay Name</p>
              <TextField
                size="small"
                placeholder="Enter Company Name"
                name="companyname"
                value={compnayName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>
                Established In
              </p>
              <TextField
                type="date"
                size="small"
                placeholder="Establish"
                name="establish"
                value={establish}
                onChange={(e) => setEstablish(e.target.value)}
                style={{ minWidth: 280 }}
              />
            </div>
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>
                Communication Email?
              </p>
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
              <p style={{ color: "#57595A", fontWeight: 500 }}>
                Contact Phone Number
              </p>
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
            <div>
              <p style={{ color: "#57595A", fontWeight: 500 }}>WebSite</p>
              <TextField
                type="url"
                size="small"
                placeholder="Enter Website"
                name="web"
                value={web}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LanguageOutlined sx={{ color: "#B1B2B2" }} />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setWeb(e.target.value)}
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
            <p style={{ color: "#57595A", fontWeight: 500 }}>About Company</p>
            <textarea
              placeholder="Enter"
              value={aboutCompany}
              onChange={(e) => setAboutCompany(e.target.value)}
              rows={4}
              style={{
                borderWidth: 1,
                borderColor: "#D2D3D3",
                borderRadius: 6,
                maxWidth: 691,
                minHeight: 100,
                padding: 8,
              }}
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
