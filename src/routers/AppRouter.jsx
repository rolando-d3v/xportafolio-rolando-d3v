import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRouter from "./HomeRouter";
import Intro from "../pages/intro/Intro";

export default function AppRouter() {
 
  const dispatch = useDispatch();


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/intro"
          element={
               <Intro /> 
          }
        />
        <Route
          path="/*"
          element={
              <HomeRouter />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
