import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInSide } from "./Pages/SignIn/SignIn";
import { SignUpSide } from "./Pages/SignUp/SignUp";
import { MyProSidebarProvider } from "./Sidebar/sidebarContext";
import AirSolutions from "./Pages/AirSolutions/AirSolutions";
import Tracking from "./Pages/Tracking/Tracking";
import SeaSolutions from "./Pages/SeaSolutions/SeaSolutions";
import Setting from "./Pages/Setting/Setting";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignInSide />}></Route>
        <Route exact path="/signup" element={<SignUpSide />}></Route>

        <Route path="/airsolutions" element={<AirSolutions />} />
        <Route path="/seasolutions" element={<SeaSolutions />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
