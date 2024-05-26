import React from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { AppBar, Button, Card, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo2 from "../../../assets/images/xenspire-logo 1.png";
import img1 from "../../../assets/images/OBJECTS.png";
import img2 from "../../../assets/images/Group 1000004789.png";
import img3 from "../../../assets/images/Group 1000004790.png";

export const AboutAssigment = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-app-lightBlue w-full h-full px-16 pb-10">
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
                <text style={{ fontSize: 12, color: "#000000" }}>testUser</text>
                <text style={{ fontSize: 12, color: "#6C737F" }}>test@123</text>
              </div>
              <IconButton onClick={() => console.log("logout")}>
                <LogoutOutlined sx={{ color: "#9AA1B4" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </AppBar>
      <div className="grid grid-flow-row text-center pt-20">
        <p style={{ color: "#1A1A1A", fontWeight: 600, fontSize: 24 }}>
          Welcome to Our Talent Profile Creation
        </p>
        <p style={{ color: "#787879", fontWeight: 500, fontSize: 16 }}>
          To create your talent profile, please complete the following
          <br />
          preference form along with the assessments.
        </p>
      </div>
      <Card sx={{ borderRadius: 5, py: 1, mt: 2 }}>
        <div className="grid grid-cols-4 justify-between items-center px-14 gap-4 ">
          <div className="flex justify-center items-center">
            <img src={img2} />
          </div>
          <div className="grid grid-flow-row gap-3 col-span-2">
            <p style={{ color: "#000000", fontSize: 14, fontWeight: 700 }}>
              STEP 1: PREFERENCE FORM <br />
              <span
                style={{
                  color: "#787879",
                  fontSize: 14,
                  fontWeight: 400,
                }}>
                (Estimated Time: 5-10 minutes)
              </span>
            </p>
            <p
              style={{
                color: "#787879",
                fontSize: 14,
                fontWeight: 500,
              }}>
              It is compulsory to fill the Preference Form. Only after
              completing this step can you proceed to the Value Assessment.
              Please take your time to carefully fill out the following
              Preferences Form. <br />
              Your responses will help us understand your work preferences
              better.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <Button
              variant="contained"
              sx={{ bgcolor: "#729434", width: 101, height: 36 }}
              onClick={() => {
                navigation("/candidate");
              }}>
              Start
            </Button>
          </div>
        </div>
      </Card>
      <Card sx={{ borderRadius: 5, py: 3, mt: 2 }}>
        <div className="grid grid-cols-4 justify-between items-center px-14 gap-4 ">
          <div className="flex justify-center items-center">
            <img src={img3} />
          </div>
          <div className="grid grid-flow-row gap-3 col-span-2">
            <p style={{ color: "#000000", fontSize: 14, fontWeight: 700 }}>
              STEP 2: Value Assessment <br />
              <span
                style={{
                  color: "#787879",
                  fontSize: 14,
                  fontWeight: 400,
                }}>
                (Estimated Time: 5-10 minutes)
              </span>
            </p>
            <p
              style={{
                color: "#787879",
                fontSize: 14,
                fontWeight: 500,
              }}>
              Filling out the Value Assessment is mandatory and can only be
              undertaken after the Preference Form is completed. This step is
              crucial for understanding your core values and priorities.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <Button
              variant="contained"
              sx={{ bgcolor: "#729434", width: 101, height: 36 }}
              onClick={() => {
                navigation("/personalitybuilder");
              }}>
              Start
            </Button>
          </div>
        </div>
      </Card>
      <Card sx={{ borderRadius: 5, py: 3, mt: 2 }}>
        <div className="grid grid-cols-4 justify-between items-center px-14 gap-4 ">
          <div className="flex justify-center items-center">
            <img src={img1} />
          </div>
          <div className="grid grid-flow-row gap-3 col-span-2">
            <p style={{ color: "#000000", fontSize: 14, fontWeight: 700 }}>
              STEP 3: Personality Builder <br />
              <span
                style={{
                  color: "#787879",
                  fontSize: 14,
                  fontWeight: 400,
                }}>
                (Estimated Time: 15-20 minutes)
              </span>
            </p>
            <p
              style={{
                color: "#787879",
                fontSize: 14,
                fontWeight: 500,
              }}>
              The Personality Builder form is essential for creating a
              comprehensive profile and can only be accessed after the Value
              Assessment is fully completed. This final step will help in
              constructing a detailed and accurate personality profile. <br />
              Please proceed to complete the Personality Builder form to further
              enhance your profile.
            </p>
          </div>
          <div className="flex justify-end items-center">
            <Button
              variant="contained"
              sx={{ bgcolor: "#729434", width: 101, height: 36 }}
              onClick={() => {
                navigation("/candidatequestion");
              }}>
              Start
            </Button>
          </div>
        </div>
      </Card>
      <Card sx={{ borderRadius: 5, py: 3, mt: 2 }}>
        <div className="grid grid-flow-row justify-center text-center">
          <p style={{ color: "#404040", fontSize: 20, fontWeight: 700 }}>
            Just Want to Take an Assessment?
          </p>
          <p style={{ color: "#787879", fontSize: 16, fontWeight: 500 }}>
            You can take any of the assessments independently to see your score
          </p>
          <div className="flex gap-3 justify-center mt-7">
            <Button
              style={{ borderColor: "#729434", color: "#729434" }}
              variant="outlined">
              TAKE VALUE ASSESSMENT
            </Button>
            <Button
              style={{ borderColor: "#729434", color: "#729434" }}
              variant="outlined">
              TAKE PERSONALITY BUILDER
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
