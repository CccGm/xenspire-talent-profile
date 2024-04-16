import React from "react";
import logo from "../../assets/images/Logo.png";
import { TimerOutlined } from "@mui/icons-material";

export const NavBar = ({ show }) => {
  return (
    <nav className="fixed top-0 w-full p-3 bg-app-LightTeal">
      <div
        className={`${
          !show ? "justify-between" : ""
        }  grid grid-flow-col  items-center px-10`}>
        <img src={logo} alt="logo" width={60} />
        <text className="text-app-Teal font-extrabold text-3xl">
          Xenspire Talent
        </text>
        {!show ? (
          <div className="grid grid-flow-col" style={{ color: "#008080" }}>
            <TimerOutlined />
            <text className="mr-10 ml-2 text-app-Teal">15 mins</text>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};
