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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dummy_Benifits } from "../../../utils/dummy";
import { Dialoge_Add_User } from "../../common/dialog";

export const CandidateScreen = () => {
  const [array, serArray] = React.useState(Dummy_Benifits);
  const [search, setSearch] = React.useState("");
  const [dialogeOpen, setDealogeOpen] = React.useState(false);
  const navigation = useNavigate();

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

  const handleDialogeClose = () => {
    setDealogeOpen(false);
  };

  const handleDilaogeSave = async (name, email) => {
    console.log(name, email);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addcandidate/",
        {
          name,
          email,
        }
      );
      if (response.status === 200) {
        console.log("create candidate succesfully");
      } else {
        console.log(" candidate not created");
      }
    } catch (error) {
      console.log(" candidate not created", error);
    }
  };

  return (
    <div className="py-16 px-10 w-full">
      <div className="px-10 mb-5 justify-between flex">
        <Autocomplete
          freeSolo
          size="small"
          value={search}
          onChange={(e, newValue) => setSearch(newValue)}
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
            onClick={() => setDealogeOpen(true)}
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
              <StyledTableRow
                key={index}
                className="hover:bg-app-offWhite hover:cursor-pointer">
                <TableCell onClick={() => navigation("/candidateProfile")}>
                  {row.name}
                </TableCell>
                <TableCell onClick={() => navigation("/candidateProfile")}>
                  <RenderStatus data={row.status} />
                </TableCell>
                <TableCell onClick={() => navigation("/candidateProfile")}>
                  {row.email}
                </TableCell>
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

      <Dialoge_Add_User
        isOpen={dialogeOpen}
        onClose={handleDialogeClose}
        onSave={handleDilaogeSave}
      />
    </div>
  );
};
