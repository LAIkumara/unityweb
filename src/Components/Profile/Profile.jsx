import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import Cover from "../../assets/images/cover.jpg";
import Logo from "../../assets/images/logo.png";
import { Avatar, Button } from "@mui/material"; // Update import to include Button
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModel";
// Import Button from @mui/material

export default function Profile() {
  const [tabValue, setTabValue] = useState("1");
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };

  const handleFollowUser = () => {
    console.log("follow user");
  };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) {
      console.log("tab 4");
    } else if (newValue === 1) {
      console.log("tab 1");
    }
  };
  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Profile</h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src={Cover}
          alt="Cover"
        />{" "}
        {/* Add alt attribute */}
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem] ">
          <Avatar
            className="transform -translate-y-20 rounded-full"
            src={Logo}
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? "Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex item-center">
            <h1 className="font-bold text-lg">akila</h1>
          </div>
          <h1 className="text-gray-500">akila@gmail.com</h1>
        </div>
        <div className=" mt-2 space-y-3">
          <p>awgju uaygs uaysg aiusg hajhsg aisuhg iaushg aiushg </p>

          <div className="py-1 flex space-x-5">
            <div className=" flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className=" text-gray-500">Followers</span>
            </div>
            <div className=" flex items-center space-x-1 font-semibold">
              <span>300</span>
              <span className=" text-gray-500">Following</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Posts" value="1" />
                <Tab label="Workout Status" value="2" />
                <Tab label="Workout plan" value="3" />
                <Tab label="Meal plan" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">
              {[1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="3">
              {[1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="4">
              {[1, 1].map((item) => (
                <TweetCard />
              ))}
            </TabPanel>
            <TabPanel value="2">Workout Status</TabPanel>
            <TabPanel value="3">Workout Plan</TabPanel>
            <TabPanel value="4">Meal Plan</TabPanel>
          </TabContext>
        </Box>
      </section>
    </div>
  );
}
