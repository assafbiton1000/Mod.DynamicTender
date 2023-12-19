import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./features/Orders/Orders";
const TenderRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TenderRoutes;
