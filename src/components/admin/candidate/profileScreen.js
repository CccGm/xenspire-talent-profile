import React from "react";
import { Avatar, Badge, Button, Divider } from "@mui/material";
import { MoreHoriz, Verified } from "@mui/icons-material";
import assessment from "../../../assets/images/assesment.png";
import values from "../../../assets/images/Values.png";
import prefrences from "../../../assets/images/Prefrances.png";
import avtar from "../../../assets/images/Avatar.png";

export const ProfileScreen = () => {
  return (
    <div className="mb-20 w-full">
      <>
        <img
          src="https://i.pinimg.com/736x/48/bb/02/48bb02993d5753f90c64ee1822ac2aab.jpg"
          style={{ width: "100%", height: 180 }}
          alt="banner"
        />
        <div className="px-8 flex justify-start">
          <div className="-mt-4 ">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<Verified color="primary" />}>
              <Avatar
                alt="Remy Sharp"
                src={avtar}
                sx={{ width: 100, height: 100, padding: 0.4, bgcolor: "white" }}
              />
            </Badge>
          </div>
          <div className="justify-between w-full  items-center flex pl-5">
            <div className="grid grid-flow-row">
              <text
                style={{
                  color: "#101828",
                  fontWeight: "bold",
                  fontSize: 26,
                }}>
                Amélie Laurent
              </text>
              <p style={{ color: "#008080" }}>
                I'm a Product Designer based in Melbourne.
              </p>
            </div>
            <div className="grid grid-flow-col">
              <Button
                variant="outlined"
                sx={{ borderColor: "gray", color: "#344054" }}>
                <MoreHoriz />
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderColor: "#7F56D9",
                  color: "#ffffff",
                  bgcolor: "#107569",
                  ml: 3,
                }}>
                View Persona
              </Button>
            </div>
          </div>
        </div>
      </>

      <div className="px-8 mt-5">
        <text style={{ color: "#101828", fontWeight: "bold", fontSize: 20 }}>
          Experiance
        </text>
        <p style={{ color: "#008080" }}>
          I specialise in UX/UI design, brand strategy, and Webflow development.
        </p>
      </div>
      <div className="px-8 mt-5 grid grid-cols-2">
        <div>
          <text style={{ color: "#101828", fontWeight: "bold", fontSize: 20 }}>
            About me
          </text>
          <p style={{ color: "#008080" }}>
            I'm a Product Designer based in Melbourne, Australia. I enjoy
            working on product design, design systems, and Webflow projects, but
            I don't take myself too seriously.
            <br />
            <br /> I’ve worked with some of the world’s most exciting companies,
            including Coinbase, Stripe, and Linear. I'm passionate about helping
            startups grow, improve their UX and customer experience, and to
            raise venture capital through good design. <br />
            <br />
            My work has been featured on Typewolf, Mindsparkle Magazine,
            Webflow, Fonts In Use, CSS Winner, httpster, Siteinspire, and Best
            Website Gallery.
          </p>
        </div>
        <div className="px-14 py-5 grid grid-cols-2 gap-5">
          <div className="grid grid-flow-row ">
            <text style={{ color: "#008080", fontWeight: "500" }}>
              Location
            </text>
            <text>Melonu us</text>
          </div>
          <div className="grid grid-flow-row ">
            <text style={{ color: "#008080", fontWeight: "500" }}>Email</text>
            <text style={{ color: "#6941C6" }}>abc@gmail.com</text>
          </div>
          <div className="grid grid-flow-row ">
            <text style={{ color: "#008080", fontWeight: "500" }}>
              Job stastus
            </text>
            <text style={{ color: "#6941C6" }}>Actively searching</text>
          </div>
          <div className="grid grid-flow-row ">
            <text style={{ color: "#008080", fontWeight: "500" }}>Phone</text>
            <text style={{ color: "#6941C6" }}>123456789</text>
          </div>
        </div>
      </div>
      <div className="px-8 grid grid-flow-col mt-5">
        <div className="border-app-border border mx-16 rounded-lg">
          <div className="grid grid-flow-col justify-center  py-3 ">
            <img src={prefrences} alt="performance" width={80} />
            <div className="grid grid-flow-row pl-3">
              <text style={{ color: "#101828", fontWeight: 500 }}>
                Preferences
              </text>
              <text style={{ color: "#669F2A" }}>Completed</text>
            </div>
          </div>
          <Divider />
          <div className="p-3 flex justify-end">
            <text style={{ fontSize: 16, fontWeight: 500, color: "#6941C6" }}>
              Know More
            </text>
          </div>
        </div>
        <div className="border-app-border border mx-16 rounded-lg">
          <div className="grid grid-flow-col justify-center  py-3 ">
            <img src={values} alt="performance" width={80} />
            <div className="grid grid-flow-row pl-3">
              <text style={{ color: "#101828", fontWeight: 500 }}>Values</text>
              <text style={{ color: "#F79009" }}>In Progress</text>
            </div>
          </div>
          <Divider />
          <div className="p-3 flex justify-end">
            <text style={{ fontSize: 16, fontWeight: 500, color: "#6941C6" }}>
              Know More
            </text>
          </div>
        </div>
        <div className="border-app-border border mx-16 rounded-lg">
          <div className="grid grid-flow-col justify-center  py-3 ">
            <img src={assessment} alt="performance" width={80} />
            <div className="grid grid-flow-row pl-3 ">
              <text style={{ color: "#101828", fontWeight: 500 }}>
                Persona Builder
              </text>
              <text style={{ color: "#F04438" }}>Not yet started</text>
            </div>
          </div>
          <Divider />
          <div className="p-2 flex justify-end">
            <text style={{ fontSize: 16, fontWeight: 500, color: "#6941C6" }}>
              Know More
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};
