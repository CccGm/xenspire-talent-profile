import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  AccessTime,
  CheckBox,
  Circle,
  DescriptionOutlined,
  RoomOutlined,
} from "@mui/icons-material";
import { Chip } from "@mui/material";

export const ClientReport = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#008080",
      color: "#E3F9F9",
      fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 500,
      color: "#101828",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      //   border: 0,
    },
  }));

  function createData(skill, proficiency) {
    return { skill, proficiency };
  }

  const skills = [
    createData("Java", "Highly Skilled with machine learning Experience"),
    createData("Circools", "Circools"),
  ];

  function createPillars(piller, weight) {
    return { piller, weight };
  }

  const pillers = [
    createPillars("Skills & Proficiency", 300),
    createPillars("Emotional Flexibility", 250),
    createPillars("Socialbility", 30),
    createPillars("Values", 200),
    createPillars("Cognitive Agility", 180),
  ];

  const cerificats = [
    "Generative AI",
    "Cybersecurity",
    "Sustainable Tech Solutions",
    "Cloud Computing & DevOps",
    "Data Science & Analytics",
    "Human-Computer Interaction",
  ];

  const completion = [
    "problem-solving",
    "critical thinking",
    "communication",
    "creativity",
    "adaptability",
    "teamwork",
    "leadership",
  ];
  const values = ["Power", "Security", "Conformity", "Universalism"];

  return (
    <div className="w-full pb-20">
      <div className="px-8 mt-3">
        <p style={{ color: "#3980A2", fontSize: 20, fontWeight: 500 }}>
          Job Title
        </p>
        <p style={{ color: "#008080", fontSize: 35, fontWeight: 500 }}>
          Company Name
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="pl-8 pr-2">
          <div>
            <p
              style={{
                color: "#008080",
                fontSize: 25,
                fontWeight: 500,
                opacity: 0.6,
              }}>
              Successful Candidate
            </p>
            <p style={{ color: "#475467" }}>
              Untitled is a technology company that builds infrastructure for
              your startup, so you don’t have to. Businesses of every size—from
              new startups to public companies—use our software to manage their
              businesses.
            </p>
          </div>
          <div className="py-3">
            <p style={{ color: "#008080", fontSize: 35, fontWeight: 500 }}>
              Skills
            </p>
            <TableContainer
              component={Paper}
              sx={{
                maxWidth: 500,
                borderRadius: 5,
                borderColor: "#008080",
                borderWidth: 1,
              }}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell width={100}>Skills</StyledTableCell>
                    <StyledTableCell>Proficiency</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {skills.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{row.skill}</StyledTableCell>
                      <StyledTableCell>{row.proficiency}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="py-3">
            <p style={{ color: "#008080", fontSize: 35, fontWeight: 500 }}>
              Competency Pillars
            </p>
            <TableContainer
              component={Paper}
              sx={{
                maxWidth: 500,
                borderRadius: 5,
                borderColor: "#008080",
                borderWidth: 1,
              }}>
              <Table aria-label="customized table" size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Competency Pillars</StyledTableCell>
                    <StyledTableCell>Weightages</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pillers.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{row.piller}</StyledTableCell>
                      <StyledTableCell>{row.weight}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="grid grid-flow-col px-4 justify-between max-w-[500px]">
            <div className="grid grid-flow-col justify-between border p-2 border-app-Teal800 rounded-md w-52 items-center">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#344054" }}>
                Background Test
              </p>
              <CheckBox checked={true} color="primary" />
            </div>
            <div className="grid grid-flow-col justify-between border p-2 border-app-Teal800 rounded-md w-52 items-center">
              <p style={{ fontSize: 14, fontWeight: 600, color: "#344054" }}>
                Drug Test
              </p>
              <CheckBox checked={true} color="primary" />
            </div>
          </div>
        </div>
        <div className="pr-5 pl-20">
          <div>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#101828",
                paddingBottom: 10,
              }}>
              Preferences : On-site
            </p>
            <div className="grid grid-flow-row gap-3">
              <div>
                <Chip
                  variant="outlined"
                  icon={<Circle />}
                  label="Relocation :   YES"
                  sx={{
                    color: "#008080",
                    bgcolor: "#EFF8FF",
                    borderColor: "#66B2B2",
                    "& .MuiChip-icon": {
                      color: "#66B2B2",
                      fontSize: 8,
                    },
                  }}
                />
              </div>
              <div>
                <Chip
                  variant="outlined"
                  icon={<AccessTime />}
                  label="Compensation :  $40/Hr"
                  sx={{
                    color: "#008080",
                    bgcolor: "#EFF8FF",
                    borderColor: "#66B2B2",
                    "& .MuiChip-icon": {
                      color: "#98A2B3",
                      fontSize: 15,
                    },
                  }}
                />
              </div>
              <div>
                <Chip
                  variant="outlined"
                  icon={<DescriptionOutlined />}
                  label="H1B/GC/Citizen"
                  sx={{
                    color: "#008080",
                    bgcolor: "#EFF8FF",
                    borderColor: "#66B2B2",
                    "& .MuiChip-icon": {
                      color: "#98A2B3",
                      fontSize: 15,
                    },
                  }}
                />
                <Chip
                  variant="outlined"
                  icon={<RoomOutlined />}
                  label="Hyderabad"
                  sx={{
                    color: "#008080",
                    bgcolor: "#EFF8FF",
                    borderColor: "#66B2B2",
                    "& .MuiChip-icon": {
                      color: "#98A2B3",
                      fontSize: 15,
                    },
                    ml: 1,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#101828",
              }}>
              Certifications
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#0D1A33",
                opacity: 0.4,
                paddingBottom: 10,
              }}>
              List of Certifications
            </p>
            <ul>
              {cerificats.map((value, index) => {
                return (
                  <li
                    style={{ color: "#0D1A33", fontSize: 14, opacity: 0.8 }}
                    key={index}>
                    <Circle sx={{ fontSize: 8, mr: 1 }} />
                    {value}.
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-10">
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#101828",
              }}>
              Top 5 Competencies
            </p>
            <p
              style={{
                fontSize: 12,
                color: "#0D1A33",
                opacity: 0.4,
                paddingBottom: 10,
              }}>
              List of others user goals
            </p>
            <ul>
              {completion.map((value, index) => {
                return (
                  <li
                    style={{ color: "#0D1A33", fontSize: 14, opacity: 0.8 }}
                    key={index}>
                    <Circle sx={{ fontSize: 8, mr: 1 }} />
                    {value}.
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center px-8 mt-3">
        <p style={{ color: "#008080", fontSize: 35, fontWeight: 500 }}>
          Values
        </p>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: 600,
            borderRadius: 2,
            borderColor: "#008080",
            borderWidth: 1,
            my: 2,
            ml: 5,
          }}>
          <Table aria-label="customized table" size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell width={150}>Rank </StyledTableCell>
                <StyledTableCell>Values</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell width={500}>
                    <div className="flex gap-3 ">
                      {values.map((value) => (
                        <p key={value}>{value}</p>
                      ))}
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
