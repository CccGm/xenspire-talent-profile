import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Forgot_Pass } from "./forgot_pass";
import { Login } from "./login";
import { NavBar } from "../widgets/navbar";
import { Footer } from "../widgets/footer";
import { Reset_Password } from "./reset_password";

export const Auth = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPass" element={<Forgot_Pass />} />
        <Route path="resetPass" element={<Reset_Password />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
      <NavBar />
      <Footer />
    </>
  );
};
