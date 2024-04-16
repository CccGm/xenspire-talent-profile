import React from "react";
import {
  InsertChartOutlinedTwoTone,
  LayersOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";

export const SideNav = () => {
  return (
    <aside className="fixed h-screen w-72 bg-app-Border grid pt-44">
      <div>
        <div className="bg-white m-2 grid-flow-col grid justify-between p-2 rounded-md">
          <div className="grid-flow-col grid">
            <InsertChartOutlinedTwoTone />
            <text style={{ color: "black", fontSize: 14, marginLeft: 10 }}>
              Jobs
            </text>
          </div>
        </div>
        <div className="bg-white m-2 grid-flow-col grid justify-between p-2 rounded-md">
          <div className="grid-flow-col grid">
            <LayersOutlined />
            <text style={{ color: "black", fontSize: 14, marginLeft: 10 }}>
              Candidates
            </text>
          </div>
        </div>
        <div className="bg-white m-2 grid-flow-col grid justify-between p-2 rounded-md">
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
