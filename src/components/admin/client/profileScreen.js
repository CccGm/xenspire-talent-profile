import React from "react";
import { Avatar, Badge, Button } from "@mui/material";
import { MoreHoriz, Verified } from "@mui/icons-material";
import logo from "../../../assets/images/Logo.png";

export const ClientProfileScreen = () => {
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
                src={logo}
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
                Xenspire Group
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
          Company Headline
        </text>
        <p style={{ color: "#008080" }}>
          I specialise in UX/UI design, brand strategy, and Webflow development.
        </p>
      </div>
      <div className="px-8 mt-5 grid grid-cols-2">
        <div>
          <text style={{ color: "#101828", fontWeight: "bold", fontSize: 20 }}>
            About Company
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
              Hiring Manager
            </text>
            <text style={{ color: "#6941C6" }}>nilesh Khartad</text>
          </div>
          <div className="grid grid-flow-row ">
            <text style={{ color: "#008080", fontWeight: "500" }}>
              Location
            </text>
            <text>Boston, US</text>
          </div>
          <div className="grid grid-flow-row gap-1">
            <text style={{ color: "#008080", fontWeight: "500" }}>
              Hiring Manager Email
            </text>
            <text style={{ color: "#6941C6" }}>abc@gmail.com</text>
          </div>

          <div className="grid grid-flow-row ">
            <text style={{ color: "#008080", fontWeight: "500" }}>Phone</text>
            <text style={{ color: "#6941C6" }}>123456789</text>
          </div>
        </div>
      </div>
      <div className="px-8 mt-5">
        <p>Jobs Posted</p>
        <div className="grid grid-flow-col mt-5 px-8">
          <div>
            <p className="font-semibold">Job name 1</p>
            <p style={{ color: "#335015" }}>Open</p>
          </div>
          <div>
            <p className="font-semibold">Job name 1</p>
            <p style={{ color: "#335015" }}>Open</p>
          </div>
          <div>
            <p className="font-semibold">Job name 1</p>
            <p style={{ color: "#B42318" }}>Failed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
