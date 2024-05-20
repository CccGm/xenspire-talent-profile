import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Basic_Details } from "./basic_details";
import { ContextProvider } from "../../context";
export const Candidate = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="basicdetails" replace />} />

          <Route path="basicdetails" element={<Basic_Details />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContextProvider>
    </>
  );
};
