import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import RequireAuth from "../HOC/RequiredAuth";
import AllInventory from "../Page/AllInventory";
import Home from "../Page/Home";
import Inventory from "../Page/Inventory";
import SingleInventory from "../Page/SingleInventory";
import Unauth from "../Page/Unauth";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addcar"
          element={
            <RequireAuth child>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/inventoryall" element={<AllInventory />} />
        <Route path="/singleinventory/:id" element={<SingleInventory />} />
        <Route path="/unauthor" element={<Unauth />} />
        
      </Routes>
    </>
  );
};

export default AllRoutes;
