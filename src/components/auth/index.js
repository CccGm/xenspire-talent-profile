import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Forgot_Pass } from "./forgot_pass";
import { Login } from "./login";
import { NavBar } from "../widgets/navbar";
import { Footer } from "../widgets/footer";
import { Reset_Password } from "./reset_password";
import { ContextProvider } from "../../context";

export const Auth = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/auth" element={<Navigate to="/auth/login" replace />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/forgotPass" element={<Forgot_Pass />} />
          <Route path="/auth/resetPass" element={<Reset_Password />} />
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
        <NavBar show={true} />
        <Footer />
      </ContextProvider>
    </>
  );
};
