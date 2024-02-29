import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Artist from "../pages/artist/artist";
import Contact from "../pages/contact/contact";
import Event from "../pages/events/event";
import Booking from "../pages/booking/booking";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}
