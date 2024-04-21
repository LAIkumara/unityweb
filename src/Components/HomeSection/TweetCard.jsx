import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function TweetCard() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("open model");
  };

  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };

  const handleLiketweet = () => {
    console.log("handle like tweet");
  };
  return (
    <div className="">
      {/*
        <div className="flex items-center font-semibold text-gray-700 py-2">
          <RepeatIcon />
          <p>You Retweet</p>
        </div>
  */}

      <div className="flex space-x-5">
        <div>
          <img
            onClick={() => navigate(`/profile/${6}`)}
            className=" cursor-pointer"
            src={Logo}
            height="70px"
            width="70px"
            alt="logo"
          />
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className=" font-semibold">Akila</span>
              <span className="text-gray-600">akila@gmail</span>
            </div>
            <div>
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
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div className=" cursor-pointer">
              <p className="mb-2 p-0">
                ayuhsguhag siuaghs iuagsu iuahsi iuyas iuas
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src={Logo}
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className=" cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>30</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLiketweet}
                    className=" cursor-pointer"
                  />
                ) : (
                  <FavoriteBorderIcon
                    onClick={handleLiketweet}
                    className=" cursor-pointer"
                  />
                )}
                <p>54</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
