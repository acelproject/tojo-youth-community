import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import AgendaKegiatanPage from "./pages/AgendaKegiatanPage";
import ContactPage from "./pages/ContactsPage";

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/agenda-kegiatan" element={<AgendaKegiatanPage/>} />
          <Route path="/kontak-kami" element={<ContactPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
