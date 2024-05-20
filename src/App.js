import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";
import { DashBoard } from "./components/dashboard";
import { Admin } from "./components/admin";
import { Candidate } from "./components/candidate";

function App() {
  return (
    <BrowserRouter>
      {/* <Auth /> */}
      {/* <DashBoard /> */}
      <Candidate />
      {/* <Admin /> */}
    </BrowserRouter>
  );
}

export default App;
