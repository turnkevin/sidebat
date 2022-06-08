import React, { useState } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SettingsIcon from "@mui/icons-material/Settings";
import CampaignIcon from "@mui/icons-material/Campaign";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ChatIcon from "@mui/icons-material/Chat";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PersonIcon from "@mui/icons-material/Person";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.png";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* profile */}
      <div className="profile">
        <img src={avatar} alt="profile_img" />
      </div>
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <InsertLinkIcon name="Links"></InsertLinkIcon>
            </span>
            <span className="title">Links</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <PersonIcon name="Appearance"></PersonIcon>
            </span>
            <span className="title">Appearance</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <SettingsIcon name="Settings"></SettingsIcon>
            </span>
            <span className="title">Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <EqualizerIcon name="Analytics"></EqualizerIcon>
            </span>
            <span className="title">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <UpgradeIcon name="Upgrade"></UpgradeIcon>
            </span>
            <span className="title">Upgrade</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <ChatIcon name="Support"></ChatIcon>
            </span>
            <span className="title">Support</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <CampaignIcon name="News"></CampaignIcon>
            </span>
            <span className="title">What's new</span>
          </a>
        </li>
      </ul>
      <div className="logo">
        <img src={logo} alt="logo_img" />
        <p className="logo_title"> A-Comosus</p>
      </div>
    </div>
  );
}

export default Sidebar;
