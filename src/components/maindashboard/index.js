import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Candidate } from "./candidate";
import { ContextProvider } from "../../context";
import { LandingPage } from "./landingpage";
import { Client } from "./client";
import { CandidateQuestions } from "./candidate/question";
import { ClientQuestions } from "./client/question";

export const MainDashboard = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="landing" replace />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="candidatequestion" element={<CandidateQuestions />} />
          <Route path="client" element={<Client />} />
          <Route path="clientquestion" element={<ClientQuestions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContextProvider>
    </>
  );
};
