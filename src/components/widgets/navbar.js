import React from "react";
import logo from "../../assets/images/Logo.png";
import { TimerOutlined } from "@mui/icons-material";
import { useAppContext } from "../../context";

export const NavBar = ({ show }) => {
  const { seconds } = useAppContext();

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${hrs < 10 ? "0" + hrs : hrs}:${mins < 10 ? "0" + mins : mins}:${
      secs < 10 ? "0" + secs : secs
    }`;
  };
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
            <text className="mr-10 ml-2 text-app-Teal">
              {formatTime(seconds)}
            </text>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};
