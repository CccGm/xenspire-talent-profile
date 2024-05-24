import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Auth } from "./components/auth";
import { DashBoard } from "./components/dashboard";
import { Admin } from "./components/admin";
import { MainDashboard } from "./components/maindashboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Auth /> */}
      {/* <DashBoard /> */}
      <MainDashboard />
      {/* <Admin /> */}
    </BrowserRouter>
  );
}

export default App;
