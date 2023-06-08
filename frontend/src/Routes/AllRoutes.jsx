import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import Home from "../Page/Home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
