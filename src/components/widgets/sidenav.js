import React from "react";
import {
  InsertChartOutlinedTwoTone,
  LayersOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import logo from "../../assets/images/Logo.png";

export const SideNav = () => {
  return (
    <aside className="fixed h-screen w-72 bg-app-LightTeal grid content-start gap-20 pt-10">
      <div className="grid grid-flow-col items-center justify-center">
        <img src={logo} alt="logo" width={60} />
        <text className="text-app-Teal font-extrabold text-2xl">
          Xenspire Talent
        </text>
      </div>
      <div>
        <div className="bg-white m-2 grid-flow-col grid justify-start p-2 rounded-md">
          <div className="grid-flow-col grid">
            <InsertChartOutlinedTwoTone />
            <text style={{ color: "black", fontSize: 14, marginLeft: 10 }}>
              Jobs
            </text>
          </div>
        </div>
        <div className="bg-white m-2 grid-flow-col grid justify-start p-2 rounded-md">
          <div className="grid-flow-col grid">
            <LayersOutlined />
            <text style={{ color: "black", fontSize: 14, marginLeft: 10 }}>
              Candidates
            </text>
          </div>
        </div>
        <div className="bg-white m-2 grid-flow-col grid justify-start p-2 rounded-md">
          <div className="grid-flow-col grid">
            <PeopleAltOutlined />
            <text style={{ color: "black", fontSize: 14, marginLeft: 10 }}>
              Customers
            </text>
          </div>
        </div>
      </div>
    </aside>
  );
};
