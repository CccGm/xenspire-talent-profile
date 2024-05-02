import React from "react";
import {
  Autocomplete,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  EmailOutlined,
  FiberManualRecord,
  PersonAddAltOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Dummy_Benifits } from "../../../utils/dummy";

export const CandidateScreen = () => {
  const [array, serArray] = React.useState(Dummy_Benifits);
  const [search, setSearch] = React.useState("");

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#ffffff",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const StyledTableHead = styled(TableHead)`
    & .MuiTableCell-root {
      background-color: #f9fafb;
    }
  `;

  const StyledTableContainer = styled(TableContainer)`
    border-radius: 1rem;
    max-height: 480px;
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  const RenderStatus = ({ data }) => {
    let colorCode = "";
    let BgColorCode = "";
    if (data === "Actively Looking") {
      colorCode = "success";
      BgColorCode = "#ECFDF3";
    } else if (data === "Open for work") {
      colorCode = "warning";
      BgColorCode = "#FFFAEB";
    } else if (data === "Not looking for job") {
      colorCode = "error";
      BgColorCode = "#FEF3F2";
    }
    return (
      <Chip
        icon={<FiberManualRecord fontSize="10" />}
        label={data}
        color={colorCode}
        variant="outlined"
        style={{ backgroundColor: BgColorCode }}
      />
    );
  };

  return (
    <div className="py-16 px-10 w-full">
      <div className="px-10 mb-5 justify-between flex">
        <Autocomplete
          freeSolo
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          options={array.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search Candidate"
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchOutlined />,
              }}
              style={{
                width: 350,
                backgroundColor: "#F0FDF9",
              }}
            />
          )}
        />
        <div>
          <Chip
            label="Create"
            variant="filled"
            size="medium"
            icon={
              <PersonAddAltOutlined
                style={{ color: "#ffffff", fontSize: 20, marginLeft: 10 }}
              />
            }
            style={{
              backgroundColor: "#107569",
              color: "#ffffff",
              fontSize: 20,
            }}
            onClick={() => console.log("Create click")}
            clickable
          />
        </div>
      </div>

      {/* table */}
      <StyledTableContainer sx={{ borderWidth: 1, borderColor: "#D1D1D1" }}>
        <Table aria-label="customized table" stickyHeader>
          <StyledTableHead>
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", color: "#125D56", width: 300 }}>
                Candidate Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#125D56" }}>
                Status
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#125D56" }}>
                Candidate Email
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#125D56" }}>
                Report
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "#125D56" }}></TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {array.map((row, index) => (
              <StyledTableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <RenderStatus data={row.status} />
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell align="center">
                  <Chip
                    label="View Report"
                    onClick={() => console.log("View report click" + row)}
                    clickable
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => console.log("email click :" + row.email)}>
                    <EmailOutlined />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};
