import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Discover from "./components/Discover";
import FindJobs from "./components/FindJobs";
import ForRecruiters from "./components/ForRecruiters";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

import { NavLink } from "react-router-dom";
import JFlogo from "./JFlogo.png";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <nav className="navbar">
          <a href="/">
            <img src={JFlogo} style={{ width: "180px" }} />
          </a>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "rgb(3, 3, 210)",
                  background: isActive ? "rgb(104, 104, 255)" : "white",
                  padding: "5px 8px"
                })}
                to=""
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "rgb(3, 3, 210)",
                  background: isActive ? "rgb(104, 104, 255)" : "white",
                  padding: "5px 8px"
                })}
                to="/discover"
              >
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "rgb(3, 3, 210)",
                  background: isActive ? "rgb(104, 104, 255)" : "white",
                  padding: "5px 8px"
                })}
                to="/findjobs"
              >
                Find Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "rgb(3, 3, 210)",
                  background: isActive ? "rgb(104, 104, 255)" : "white",
                  padding: "5px 8px"
                })}
                to="/forrecruiters"
              >
                For Recruiters
              </NavLink>
            </li>
            <li>
              <button>
                <NavLink to="/login">Log In</NavLink>
              </button>
            </li>
            <li>
              <button>
                <NavLink to="/signup">Sign Up</NavLink>
              </button>
            </li>
          </ul>
        </nav>
        {/* now here we are creating different routes for routing. so wil use Routes tag. */}
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/forrecruiters" element={<ForRecruiters />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
