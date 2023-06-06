import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";
 // eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Dashboard/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}
 
export default App;
