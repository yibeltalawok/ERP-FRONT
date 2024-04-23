import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/bus/home";
import Search from "./components/pages/bus/bus_search";
import Register from "./components/pages/bus/register";
import User_register from "./components/pages/users/register";
function App() {
  return (
    <>
      <div className="selection:bg-primary selection:text-fuchsia-900 w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchBus/:fromTo" element={<Search />}></Route>
          <Route path="/userRegister" element={<User_register />}></Route>
          <Route path="/busRegister" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
