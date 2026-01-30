import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Invite from "./components/invite/Invite";
import Count from "./components/count/Count";
import Schedule from "./components/schedule/Schedule";
import Dress from "./components/dress/Dress";
import Faq from "./components/invite/Faq";
import Rsvp from "./components/dress/Rsvp";
import Rsvps from "./pages/rsvp/Rsvps";
import AdminDashboard from "./pages/rsvp/AdminDashboard";
import "./index.css";
import Nos from "./components/Nos";
import Hotal from "./components/schedule/Hotal";
const Home = () => {
  return (
    <>
      <Header />
      <Invite />
      <Count />
      <Schedule />
      <Hotal />
      <Dress />
      {/* <Nos /> */}
      <Faq />
      <Rsvp />

      <h2 className="ooters">Jaslene  & Mišel  © All Rights Reserved</h2>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* RSVP Page */}
      <Route path="/rsvp" element={<Rsvps />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
