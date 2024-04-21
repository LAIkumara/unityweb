import React from "react";
import { navigationMenu } from "./NavigationMenu";

import Logo from "../../assets/images/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    handleClose();
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img src={Logo} height="70px" width="70px" alt="logo" />
        </div>

        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#1e88e5",
            }}
            variant="contained"
          >
            Tweet
          </Button>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3">
          <div className="flex item-center space-x-3">
            <AccountCircleIcon />
          </div>
          <div>
            <span>Akila</span>
            <span className="opacity-70">
              <br />
              akila@gmail.com
            </span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
