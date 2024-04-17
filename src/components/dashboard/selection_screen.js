import React from "react";
import {
  HelpOutlineOutlined,
  InsertChartOutlinedTwoTone,
  LayersOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Footer } from "../widgets/footer";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/images/Logo.png";

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  marginBottom: 10,
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Selection_Screen = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const AvatarImg = () => {
    return (
      <AvatarGroup
        max={4}
        sx={{
          justifyContent: "left",
        }}>
        <Avatar
          alt="Cindy Baker"
          src="https://eu.ui-avatars.com/api/?name=Ghelani+Mihir&size=250"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk"
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

  const drawer_Data = [
    { name: "Jobs", icon: <InsertChartOutlinedTwoTone /> },
    { name: "Candidates", icon: <LayersOutlined /> },
    { name: "Customers", icon: <PeopleAltOutlined /> },
  ];

  return (
    <div className="flex">
      <div>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ backgroundColor: "#B2D8D8" }}>
            <IconButton onClick={handleDrawer}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div className="h-full bg-app-LightTeal ">
            <List>
              <ListItem
                sx={{
                  justifyContent: open ? "initial" : "center",
                  p: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}>
                  <img src={logo} alt="logo" width={60} />
                </ListItemIcon>
                <ListItemText
                  primary={"Xenspire Talent"}
                  sx={{ opacity: open ? 1 : 0, color: "#008080", fontSize: 30 }}
                  primaryTypographyProps={{
                    fontSize: "21px",
                    fontWeight: "700",
                  }}
                />
              </ListItem>
              {drawer_Data.map((data, index) => (
                <ListItemButton
                  key={index}
                  sx={{
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: "white",
                    margin: 1,
                    borderRadius: 2,
                  }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    {data.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={data.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              ))}
            </List>
          </div>
          <Footer />
        </Drawer>
      </div>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="border-app-Teal border rounded-md p-3  grid grid-flow-col justify-between px-10">
          <text className="text-app-Teal font-semibold text-xl">Jobs</text>
          <HelpOutlineOutlined sx={{ color: "#98A2B3" }} />
        </div>

        {/* table */}
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
                    <AvatarImg />
                  </TableCell>
                  <TableCell sx={{ color: "#344054" }}>{row.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Box>
      <Footer />
    </div>
  );
};
