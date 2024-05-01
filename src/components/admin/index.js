import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ContextProvider } from "../../context";
import { HomeScreen } from "./homeScreen";
import { CandidateScreen } from "./candidateScreen";
import { SideNavAdmin } from "../widgets/sidenavAdmin";

export const Admin = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex w-full">
        <ContextProvider>
          <SideNavAdmin />
          <Routes>
            <Route path="/" element={<Navigate to="Candidate" replace />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="Candidate" element={<CandidateScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ContextProvider>
      </div>
    </div>
  );
};
