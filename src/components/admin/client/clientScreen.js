import React from "react";
import {
  Autocomplete,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { PersonAddAltOutlined, SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dummy_Benifits } from "../../../utils/dummy";
import { Dialoge_Add_User } from "../../common/dialog";

export const ClientScreen = () => {
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

  const handleDialogeClose = () => {
    setDealogeOpen(false);
  };

  const handleDilaogeSave = async (name, email) => {
    console.log(name, email);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addclient/",
        {
          name,
          email,
        }
      );
      if (response.status === 200) {
        console.log("create client succesfully");
      } else {
        console.log(" client not created");
      }
    } catch (error) {
      console.log(" clients not created", error);
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
              placeholder="Search Client"
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
                Company Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#125D56" }}>
                Hiring Manger Email
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#125D56" }}>
                Open Jobs
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", color: "#125D56" }}
              />
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {array.map((row, index) => (
              <StyledTableRow
                key={index}
                className="hover:bg-app-offWhite hover:cursor-pointer">
                <TableCell onClick={() => navigation("/clientProfile")}>
                  {row.name}
                </TableCell>
                <TableCell onClick={() => navigation("/clientProfile")}>
                  {row.email}
                </TableCell>
                <TableCell onClick={() => navigation("/clientProfile")}>
                  <p className="border w-fit py-1 px-3 rounded-full">
                    {row.openJobs}
                  </p>
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label="View Jobs"
                    onClick={() => console.log("View jobs click" + row)}
                    clickable
                  />
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
