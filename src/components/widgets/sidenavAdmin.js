import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import logo1 from "../../assets/images/Logo.png";
import logo2 from "../../assets/images/app-logo.png";
import home from "../../assets/images/home-icon.png";
import profile from "../../assets/images/profile-icon.png";
import time from "../../assets/images/timesheets-icon.png";
import avtar from "../../assets/images/Avatar.png";
import { Footer } from "./footer";

export const SideNavAdmin = ({ setUser, email }) => {
  const navigation = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState([]);

  const handleChange = () => {
    setExpanded(!expanded);
  };

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

  const drawer_Data = [
    { name: "Jobs", icon: home, path: "/home" },
    { name: "Candidates", icon: profile, path: "/Candidate" },
    { name: "Clients", icon: time, path: "/" },
  ];

  const drawer_Data_new = [
    { name: "Jobs", icon: home, path: "/home" },
    { name: "Candidates", icon: profile, path: "/Candidate" },
    { name: "Clients", icon: time, path: "/" },
  ];

  React.useEffect(() => {
    if (open) {
      setData(drawer_Data);
    } else {
      setData(drawer_Data_new);
    }
  }, [open]);

  const name = [
    { name: "Apporve", path: "/approval" },
    { name: "Create", path: "/create" },
  ];

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: "#ffffff" }}>
          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>

        <div className="h-full bg-white">
          <List>
            {/* logo */}
            <ListItem
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}>
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                }}>
                {open ? (
                  <img src={logo2} alt="logo" width={180} />
                ) : (
                  <img src={logo1} alt="logo" width={45} />
                )}
              </ListItemIcon>
            </ListItem>
            {data.map((data, index) => (
              <ListItemButton
                key={index}
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  margin: 1,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#E3F9F9" },
                }}
                onClick={() => navigation(data.path)}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <img src={data.icon} alt="logo" />
                </ListItemIcon>
                <ListItemText
                  primary={data.name}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "#344054",
                  }}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            ))}
            {/* {open && (
              <ListItemButton
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  margin: 1,
                  borderRadius: 2,
                  ":hover": { backgroundColor: "#E3F9F9" },
                }}
                onClick={() => handleChange()}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}>
                  <img src={time} alt="logo" />
                </ListItemIcon>
                <ListItemText
                  primary={"TimeSheet"}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    color: "#344054",
                  }}
                />
                <ListItemIcon
                  sx={{
                    justifyContent: "right",
                  }}>
                  {expanded ? (
                    <KeyboardArrowUpOutlined />
                  ) : (
                    <KeyboardArrowDownOutlined />
                  )}
                </ListItemIcon>
              </ListItemButton>
            )}
            
            {open &&
              expanded &&
              name.map((data, index) => (
                <ListItemButton
                  key={index}
                  sx={{
                    justifyContent: "left",
                    px: 2.5,
                    pl: 10,
                    borderRadius: 2,
                    ":hover": { backgroundColor: "#E3F9F9" },
                  }}
                  onClick={() => navigation(data.path)}>
                  <text style={{ color: "#344054", fontWeight: "500" }}>
                    {data.name}
                  </text>
                </ListItemButton>
              ))} */}
          </List>
        </div>
        {open && (
          <div className="mx-6 mb-20">
            <div className="grid grid-flow-col mt-3 justify-between">
              <div>
                <img src={avtar} className="w-10" alt="avtar" />
              </div>
              <div className="grid grid-flow-row">
                <text style={{ fontSize: 12 }}>User Name</text>
                <text style={{ fontSize: 12 }}>
                  {email ? email : "User@gmail.com"}
                </text>
              </div>
              <IconButton>
                <LogoutOutlined color="success" />
              </IconButton>
            </div>
          </div>
        )}
        <Footer />
      </Drawer>
    </>
  );
};
