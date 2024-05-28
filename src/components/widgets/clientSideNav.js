import React, { useState } from "react";
import {
  BusinessCenterOutlined,
  ChevronRightOutlined,
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MuiDrawer from "@mui/material/Drawer";
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ClientSideNav = () => {
  const navigation = useNavigate();
  const [open, setOpen] = useState(true);
  const [openCollapsePr, setOpenCollapsePr] = useState(false);

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
          <ListItemButton>
            <BusinessCenterOutlined />
            <ListItemText
              primary="Jobs"
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
            {open && openCollapsePr ? (
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
              <ListItemButton onClick={() => navigation("/clientinfo")}>
                <ListItemText inset primary="Settings " />
              </ListItemButton>
            </List>
          </Collapse>
        </div>
      </Drawer>
    </>
  );
};
