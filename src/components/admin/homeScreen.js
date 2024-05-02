import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  CloudDownloadOutlined,
  FilterListOutlined,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { ChartContainer } from "@mui/x-charts";
import { LinePlot, lineElementClasses } from "@mui/x-charts/LineChart";
import React from "react";

export const HomeScreen = ({ admin }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#7F56D9",
    },
  }));

  const LinearProgressWithLabel = (props) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "40%", mr: 1 }}>
          <BorderLinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  };

  const upData = [3, 5, 4, 8, 6, 10, 8, 13, 9, 18, 16, 14, 20];
  const downData = [20, 15, 18, 13, 10, 15, 18, 13, 11, 14, 8, 10, 6];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
    "Page H",
    "Page J",
    "Page K",
    "Page L",
    "Page M",
    "Page n",
  ];

  return (
    <div className="mx-10 mb-20 w-full">
      {/* admin name */}
      <div className="mt-10 grid grid-flow-col justify-between">
        <text className="text-app-gray900 font-bold text-2xl">
          Welcome Back,{admin ? admin : "admin name"}
        </text>
        <div>
          <Button
            startIcon={<CloudDownloadOutlined />}
            variant="outlined"
            sx={{ borderColor: "#D0D5DD", color: "#344054" }}>
            Export
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#7F56D9", color: "#ffffff", ml: 3 }}>
            Insights
          </Button>
        </div>
      </div>
      {/* buttons table */}
      <div className="mt-8 flex justify-between">
        <ButtonGroup variant="outlined">
          <Button
            sx={{
              borderColor: "#D0D5DD",
              color: "#344054",
              ":hover": { borderColor: "#D0D5DD" },
            }}>
            12 months
          </Button>
          <Button
            sx={{
              borderColor: "#D0D5DD",
              color: "#344054",
              ":hover": { borderColor: "#D0D5DD" },
            }}>
            30 days
          </Button>
          <Button
            sx={{
              borderColor: "#D0D5DD",
              color: "#344054",
              ":hover": { borderColor: "#D0D5DD" },
            }}>
            7 days
          </Button>
          <Button
            sx={{
              borderColor: "#D0D5DD",
              color: "#344054",
              ":hover": { borderColor: "#D0D5DD" },
            }}>
            24 hours
          </Button>
        </ButtonGroup>
        <div>
          <TextField type="date" variant="outlined" size="small" />
          <Button
            startIcon={<FilterListOutlined />}
            variant="outlined"
            sx={{ borderColor: "#D0D5DD", color: "#344054", ml: 3 }}>
            Filters
          </Button>
        </div>
      </div>

      {/* graph line 1*/}
      <div className="my-3 grid grid-flow-col gap-5">
        <Box
          sx={{
            borderWidth: 1,
            borderColor: "#EAECF0",
            padding: 1,
            borderRadius: 3,
            paddingBottom: 0,
          }}>
          <div className="justify-between px-3 flex">
            <text className="text-xl font-semibold">Users</text>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="grid grid-flow-col">
            <div className="mt-12 ml-4">
              <text className="text-app-gray900 font-bold text-3xl">
                10.8 K
              </text>
              <div className="mt-3">
                <text style={{ color: "#067647" }}>
                  <ArrowUpwardOutlined fontSize="small" />
                  12%
                </text>
                <text className="text-app-Teal "> vs last month</text>
              </div>
            </div>

            <ChartContainer
              width={200}
              height={150}
              series={[{ type: "line", data: upData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#17B26A",
                  strokeWidth: 2,
                },
              }}>
              <LinePlot />
            </ChartContainer>
          </div>
        </Box>
        <Box
          sx={{
            borderWidth: 1,
            borderColor: "#EAECF0",
            padding: 1,
            borderRadius: 3,
            paddingBottom: 0,
          }}>
          <div className="justify-between px-3 flex">
            <text className="text-xl font-semibold">Sessions</text>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="grid grid-flow-col">
            <div className="mt-12 ml-4">
              <text className="text-app-gray900 font-bold text-3xl">
                26.2 K
              </text>
              <div className="mt-3">
                <text style={{ color: "#F04438" }}>
                  <ArrowDownwardOutlined fontSize="small" />
                  2%
                </text>
                <text className="text-app-Teal "> vs last month</text>
              </div>
            </div>
            <ChartContainer
              width={200}
              height={150}
              series={[{ type: "line", data: downData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#F04438",
                  strokeWidth: 2,
                },
              }}>
              <LinePlot />
            </ChartContainer>
          </div>
        </Box>
        <Box
          sx={{
            borderWidth: 1,
            borderColor: "#EAECF0",
            padding: 1,
            borderRadius: 3,
            paddingBottom: 0,
          }}>
          <div className="justify-between px-3 flex">
            <text className="text-xl font-semibold">Session duration</text>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="grid grid-flow-col">
            <div className="mt-12 ml-4">
              <text className="text-app-gray900 font-bold text-3xl">
                3m 20s
              </text>
              <div className="mt-3">
                <text style={{ color: "#067647" }}>
                  <ArrowUpwardOutlined fontSize="small" />
                  2%
                </text>
                <text className="text-app-Teal "> vs last month</text>
              </div>
            </div>

            <ChartContainer
              width={200}
              height={150}
              series={[{ type: "line", data: upData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#17B26A",
                  strokeWidth: 2,
                },
              }}>
              <LinePlot />
            </ChartContainer>
          </div>
        </Box>
      </div>

      {/* graph line 2*/}
      <div className="my-3 grid grid-flow-col gap-5">
        <Box
          sx={{
            borderWidth: 1,
            borderColor: "#EAECF0",
            padding: 1,
            borderRadius: 3,
            paddingBottom: 0,
          }}>
          <div className="justify-between px-3 flex">
            <text className="text-xl font-semibold">Preferences 100%</text>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="grid grid-flow-col">
            <div className="mt-12 ml-4">
              <text className="text-app-gray900 font-bold text-3xl">
                10.8 K
              </text>
              <div className="mt-3">
                <text style={{ color: "#067647" }}>
                  <ArrowUpwardOutlined fontSize="small" />
                  12%
                </text>
                <text className="text-app-Teal "> vs last month</text>
              </div>
            </div>

            <ChartContainer
              width={200}
              height={150}
              series={[{ type: "line", data: upData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#17B26A",
                  strokeWidth: 2,
                },
              }}>
              <LinePlot />
            </ChartContainer>
          </div>
        </Box>
        <Box
          sx={{
            borderWidth: 1,
            borderColor: "#EAECF0",
            padding: 1,
            borderRadius: 3,
            paddingBottom: 0,
          }}>
          <div className="justify-between px-3 flex">
            <text className="text-xl font-semibold">Values assessment</text>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="grid grid-flow-col">
            <div className="mt-12 ml-4">
              <text className="text-app-gray900 font-bold text-3xl">
                26.2 K
              </text>
              <div className="mt-3">
                <text style={{ color: "#F04438" }}>
                  <ArrowDownwardOutlined fontSize="small" />
                  2%
                </text>
                <text className="text-app-Teal "> vs last month</text>
              </div>
            </div>
            <ChartContainer
              width={200}
              height={150}
              series={[{ type: "line", data: downData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#F04438",
                  strokeWidth: 2,
                },
              }}>
              <LinePlot />
            </ChartContainer>
          </div>
        </Box>
        <Box
          sx={{
            borderWidth: 1,
            borderColor: "#EAECF0",
            padding: 1,
            borderRadius: 3,
            paddingBottom: 0,
          }}>
          <div className="justify-between px-3 flex">
            <text className="text-xl font-semibold">Persona builder</text>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
          <div className="grid grid-flow-col">
            <div className="mt-12 ml-4">
              <text className="text-app-gray900 font-bold text-3xl">2.5 k</text>
              <div className="mt-3">
                <text style={{ color: "#067647" }}>
                  <ArrowUpwardOutlined fontSize="small" />
                  2%
                </text>
                <text className="text-app-Teal "> vs last month</text>
              </div>
            </div>

            <ChartContainer
              width={200}
              height={150}
              series={[{ type: "line", data: upData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#17B26A",
                  strokeWidth: 2,
                },
              }}>
              <LinePlot />
            </ChartContainer>
          </div>
        </Box>
      </div>

      {/* active users */}
      <div className="mt-8 px-5">
        <div className="flex justify-between">
          <text className="text-app-gray900 font-semibold text-base">
            Active users right now
          </text>
          <Button
            variant="outlined"
            sx={{ borderColor: "#D0D5DD", color: "#344054" }}>
            Real-time report
          </Button>
        </div>
        <div className="mt-3">
          <text className="text-app-gray900 font-bold text-2xl">10.8 K</text>
          <div className="flex mt-3">
            <Avatar src="https://cdn.iconscout.com/icon/premium/png-512-thumb/flags-7466994-6051620.png?f=webp&w=256" />
            <div className="w-full ml-3">
              <text>United State</text>
              <LinearProgressWithLabel value={50} />
            </div>
          </div>
          <div className="flex mt-3">
            <Avatar src="https://cdn.iconscout.com/icon/premium/png-512-thumb/flags-7467115-6051613.png?f=webp&w=256" />
            <div className="w-full ml-3">
              <text>India</text>
              <LinearProgressWithLabel value={40} />
            </div>
          </div>
          <div className="flex mt-3">
            <Avatar src="https://cdn.iconscout.com/icon/premium/png-512-thumb/flags-7466991-6051617.png?f=webp&w=256" />
            <div className="w-full ml-3">
              <text>United Kingdom</text>
              <LinearProgressWithLabel value={20} />
            </div>
          </div>
          <div className="flex mt-3">
            <Avatar src="https://cdn.iconscout.com/icon/free/png-512/free-flags-7467091-6051589.png?f=webp&w=256" />
            <div className="w-full ml-3">
              <text>Canada</text>
              <LinearProgressWithLabel value={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
