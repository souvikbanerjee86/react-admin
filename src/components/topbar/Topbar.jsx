import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">vik-admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            className="topAvatar"
            alt="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
