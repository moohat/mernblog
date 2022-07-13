import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}>          
        </Route>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
