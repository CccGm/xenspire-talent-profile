import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Candidate } from "./candidate";
import { ContextProvider } from "../../context";
import { LandingPage } from "./landingpage";
import { Client } from "./client";
import { CandidateQuestions } from "./candidate/question";
import { ClientQuestions } from "./client/question";
import { AboutAssigment } from "./candidate/aboutAssigment";
import { PersonalityBuilder } from "./candidate/personalityBuilder";
import { ClientInformation } from "./client/information";
import { CandidateInformation } from "./candidate/information";
import { ClientValues } from "./client/values";

export const MainDashboard = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="landing" replace />} />
          <Route path="landing" element={<LandingPage />} />
          {/* candidate */}
          <Route path="aboutassigment" element={<AboutAssigment />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="personalitybuilder" element={<PersonalityBuilder />} />
          <Route path="candidatequestion" element={<CandidateQuestions />} />
          <Route path="candidateinfo" element={<CandidateInformation />} />
          {/* client */}
          <Route path="client" element={<Client />} />
          <Route path="clientquestion" element={<ClientQuestions />} />
          <Route path="clientinfo" element={<ClientInformation />} />
          <Route path="clientvalues" element={<ClientValues />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContextProvider>
    </>
  );
};
