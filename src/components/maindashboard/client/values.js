import React, { useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Button,
  Card,
  IconButton,
  TextField,
} from "@mui/material";
import axios from "axios";
import { ClientSideNav } from "../../widgets/clientSideNav";
import logo2 from "../../../assets/images/xenspire-logo 1.png";

export const ClientValues = () => {
  const [stimulation, setStimulation] = useState("");
  const [security, setSecurity] = useState("");
  const [self, setSelf] = useState("");
  const [conformity, setConformity] = useState("");
  const [hedonism, setHedonism] = useState("");
  const [tradition, setTradition] = useState("");
  const [achievement, setAchievement] = useState("");
  const [benevolence, setBenevolence] = useState("");
  const [power, setPower] = useState("");
  const [universalism, setUniversalism] = useState("");
  const Rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSubmit = async () => {
    let newData = [
      { value: "Stimulation", rating: stimulation },
      { value: "Security", rating: security },
      { value: "Self-Direction", rating: self },
      { value: "Conformity", rating: conformity },
      { value: "Hedonism", rating: hedonism },
      { value: "Tradition", rating: tradition },
      { value: "Achievement", rating: achievement },
      { value: "Benevolence", rating: benevolence },
      { value: "Power", rating: power },
      { value: "Universalism", rating: universalism },
    ];

    console.log(newData);
    await axios
      .post("http:localhost:3000", { newData })
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
                  src={"https://picsum.photos/200/200.webp"}
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
      <div className="w-full p-20 ">
        <Card sx={{ borderRadius: 5, py: 2, mt: 2, px: 5 }}>
          <div className="flex justify-center text-center py-3">
            <p style={{ color: "#7F7F7F", fontSize: 20, fontWeight: 600 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-flow-row gap-8 py-10">
              <div className="grid grid-cols-2">
                <p>Stimulation :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={stimulation}
                  onChange={(e, value) => setStimulation(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Self-Direction :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={self}
                  onChange={(e, value) => setSelf(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Hedonism :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={hedonism}
                  onChange={(e, value) => setHedonism(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Achievement :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={achievement}
                  onChange={(e, value) => setAchievement(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Power :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={power}
                  onChange={(e, value) => setPower(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
            </div>
            <div className="grid grid-flow-row gap-8 border-l-2 pl-10 border-app-tableBorder py-8">
              <div className="grid grid-cols-2">
                <p>Security :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={security}
                  onChange={(e, value) => setSecurity(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Conformity :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={conformity}
                  onChange={(e, value) => setConformity(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Tradition :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={tradition}
                  onChange={(e, value) => setTradition(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Benevolence :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={benevolence}
                  onChange={(e, value) => setBenevolence(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
              <div className="grid grid-cols-2">
                <p>Universalism :</p>
                <Autocomplete
                  size="small"
                  options={Rating}
                  value={universalism}
                  onChange={(e, value) => setUniversalism(value)}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} placeholder="Select Rating" />
                  )}
                />
              </div>
            </div>
          </div>
        </Card>
        <div className="flex justify-end py-10">
          <Button
            variant="contained"
            sx={{ backgroundColor: "#729434" }}
            onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
