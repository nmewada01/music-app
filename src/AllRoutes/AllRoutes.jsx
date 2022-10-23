import React from "react";
import { Routes, Route } from "react-router-dom";
import ReqAuth from "../Authentication/ReqAuth";
import EditMusicRecord from "../components/EditMusicRecord";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import SingleMusicRecord from "../components/SingleMusicRecord";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/music/:id"
        element={
          <ReqAuth>
            <SingleMusicRecord />
          </ReqAuth>
        }
      />
      <Route path="/music/:id/edit" element={<EditMusicRecord />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default AllRoutes;
