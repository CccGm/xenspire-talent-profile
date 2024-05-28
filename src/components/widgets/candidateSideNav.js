import React, { useState } from "react";
import {
  ChevronRightOutlined,
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  LogoutOutlined,
  PeopleAltOutlined,
  PersonOutlineOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import {
  AppBar,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/xenspire-logo 1.png";

export const CandidateSideNav = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(true);
  const [openCollapseAs, setOpenCollapseAs] = useState(false);
  const [openCollapsePr, setOpenCollapsePr] = useState(false);

  function handleOpenSettingsAs() {
    setOpenCollapseAs(!openCollapseAs);
  }
  function handleOpenSettingsPr() {
    setOpenCollapsePr(!openCollapsePr);
  }
  const handleDrawer = () => {
    setOpen(!open);
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

  const NavBar = () => {
    return (
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#ffffff",
          px: 3,
          py: 1,
        }}>
        <div className="flex justify-between items-center">
          <div className="items-center flex gap-2">
            <img src={logo2} alt="logo" />
            <p style={{ color: "#1470A1", fontWeight: 800, fontSize: 16 }}>
              Xenspire Talent
            </p>
          </div>

          <div className="mr-3">
            <div className="grid grid-flow-col gap-2 justify-between">
              <div className="mr-1 w-6 rounded-full">
                <img
                  src={"https://picsum.photos/200/300.webp"}
                  className="rounded-full"
                  alt="avtar"
                />
              </div>
              <div className="grid grid-flow-row ">
                <p style={{ fontSize: 12, color: "#000000" }}>testUser</p>
                <p style={{ fontSize: 12, color: "#6C737F" }}>test@123</p>
              </div>
              <IconButton onClick={() => console.log("logout")}>
                <LogoutOutlined sx={{ color: "#9AA1B4" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </AppBar>
    );
  };

  return (
    <>
      <div
        id="navbarIcon"
        className=" justify-center z-10 flex w-8 mt-24 overflow-visible bg-white shadow-xl rounded-full fixed h-8"
        style={{ marginLeft: open ? 233 : 50 }}>
        <IconButton onClick={handleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightOutlined />}
        </IconButton>
      </div>
      <Drawer variant="permanent" open={open} className="z-0">
        <div className="h-full bg-white pt-2 mt-20">
          <ListItemButton>
            <HomeOutlined />
            <ListItemText
              primary="Home"
              sx={{ marginLeft: 2, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleOpenSettingsAs}>
            <PeopleAltOutlined
              sx={{ color: openCollapseAs ? "#729434" : "#212121" }}
            />
            <ListItemText
              primary="Assessments"
              sx={{ marginLeft: 2, opacity: open ? 1 : 0 }}
              primaryTypographyProps={{
                color: openCollapseAs ? "#729434" : "#212121",
              }}
            />
            {openCollapseAs ? (
              <ExpandLess sx={{ color: "#729434", opacity: open ? 1 : 0 }} />
            ) : (
              <ExpandMore sx={{ opacity: open ? 1 : 0 }} />
            )}
          </ListItemButton>
          <Collapse in={openCollapseAs} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemButton>
                <ListItemText inset primary="values" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText inset primary="Pyramid" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <TuneOutlined />
            <ListItemText
              primary="Preferences"
              sx={{ marginLeft: 2, opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleOpenSettingsPr}>
            <PersonOutlineOutlined
              sx={{ color: openCollapsePr ? "#729434" : "#212121" }}
            />
            <ListItemText
              primary="Profile"
              sx={{ marginLeft: 2, opacity: open ? 1 : 0 }}
              primaryTypographyProps={{
                color: openCollapsePr ? "#729434" : "#212121",
              }}
            />
            {openCollapsePr ? (
              <ExpandLess sx={{ color: "#729434", opacity: open ? 1 : 0 }} />
            ) : (
              <ExpandMore sx={{ opacity: open ? 1 : 0 }} />
            )}
          </ListItemButton>
          <Collapse in={openCollapsePr} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemButton>
                <ListItemText inset primary="My Profile" />
              </ListItemButton>
              <ListItemButton onClick={() => navigation("/candidateinfo")}>
                <ListItemText inset primary="Settings " />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
      </Drawer>
    </>
  );
};
