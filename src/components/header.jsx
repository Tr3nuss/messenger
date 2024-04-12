import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../styles/ComponentStyles/Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <p className="brand-name">Des E'cluse</p>

        <nav className="right-header-nav">
          <Box>
            <NotificationsNoneIcon color="#fff" fontSize="large" />
            <NotificationsIcon color="#000" fontSize="large" />
            <MailOutlineIcon
              color="#E37624"
              fontSize="large"
            />
          </Box>
          <Avatar alt="" src="/static/images/avatar/1.jpg" />
        </nav>
      </div>
    </>
  );
}
