import HomeIcon from "@mui/icons-material/Home";
import NotificationIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const navigationMenu = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "Notification",
    icon: <NotificationIcon />,
    path: "/notification",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
];
