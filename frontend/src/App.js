import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactUseCookie from "react-use-cookie";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { Dashboard } from "./Pages/DecisionMaker/Dashboard";
import { Form } from "./Pages/DecisionMaker/Form";
import { Mahasiswa } from "./Pages/DecisionMaker/Mahasiswa";
import { Home } from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubKriteria } from "./Pages/DecisionMaker/SubKriteria";
import { SPK } from "./Pages/DecisionMaker/SPK";
axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] =
  "application/json/x-www-form-urlencoded; charset=UTF-8; multipart/form-data";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
function App() {
  const [authCheck, setAuthCheck] = useState(false);
  const [getCookie, setCookie] = reactUseCookie();
  useEffect(() => {
    if (localStorage.getItem('auth_token')) return setAuthCheck(true);
    setAuthCheck(false);
  }, []);
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setAuthCheck={setAuthCheck} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/decision-maker/dashboard" element={<Dashboard />} />
          <Route
            path="/decision-maker/sub-kriteria"
            element={<SubKriteria />}
          />
          <Route path="/decision-maker/mahasiswa" element={<Mahasiswa />} />
          <Route path="/decision-maker/spk" element={<SPK />} />
          <Route path="/decision-maker/mahasiswa/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
