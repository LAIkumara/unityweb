import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeSection from "../HomeSection/HomeSection";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import RightPart from "../RightPart/RightPart";

export default function HomePage() {
  return (
    <Grid container xs={10} className=" mx-auto px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid
        item
        xs={20}
        lg={9}
        className="hidden lg:block w-full relative pl-10"
      >
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </Grid>
    </Grid>
  );
}
