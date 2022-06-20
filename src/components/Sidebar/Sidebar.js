import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Ozan Gürsucu
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
      <SidebarOption />
    </div>
  );
}

export default Sidebar;
