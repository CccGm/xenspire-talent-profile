import React from "react";
import { HelpOutlineOutlined } from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar, AvatarGroup } from "@mui/material";
import { NavBar } from "../widgets/navbar";
import { Footer } from "../widgets/footer";
import { SideNav } from "../widgets/sidenav";

export const Selection_Screen = () => {
  const data = [
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 1233,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 32,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 3,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 543,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 34,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 423,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 54,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 2,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 542,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 65,
    },
    {
      clien: "Catalog",
      clienWeb: "catalogapp.io",
      job: "Content curating app",
      jobDetai: "Brings all your news into one place",
      id: 342,
    },
  ];

  const Avatar_Imgs = () => {
    return (
      <AvatarGroup
        max={4}
        sx={{
          justifyContent: "left",
        }}>
        <Avatar
          alt="Cindy Baker"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
        />
      </AvatarGroup>
    );
  };

  return (
    <div>
      <SideNav />
      <div className="pt-32 pl-72 grid grid-flow-row mx-20">
        <div className="border-app-Teal border rounded-md p-3  grid grid-flow-col justify-between px-10">
          <text className="text-app-Teal font-semibold text-xl">Jobs</text>
          <HelpOutlineOutlined sx={{ color: "#98A2B3" }} />
        </div>
        <div className="my-5  mb-16 border border-app-LightTeal rounded-md">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#475467" }}>Client Name </TableCell>
                <TableCell sx={{ color: "#475467" }}>Job Name</TableCell>
                <TableCell sx={{ color: "#475467" }}>View Candidates</TableCell>
                <TableCell sx={{ color: "#475467" }}>ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>
                    <div className="grid grid-flow-row">
                      <text style={{ color: "#101828" }}>{row.clien}</text>
                      <text style={{ color: "#475467" }}> {row.clienWeb}</text>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="grid grid-flow-row">
                      <text style={{ color: "#101828" }}>{row.job}</text>
                      <text style={{ color: "#475467" }}> {row.jobDetai}</text>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <Avatar_Imgs />
                  </TableCell>
                  <TableCell sx={{ color: "#344054" }}>{row.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <NavBar show={true} />

      <Footer />
    </div>
  );
};
