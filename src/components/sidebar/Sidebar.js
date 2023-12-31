import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/*twitter icon*/}
      <TwitterIcon className="sidebar--twitterIcon" />

      {/*sidebar option*/}
      <SidebarOption text="ホーム" Icon={HomeIcon} active />
      <SidebarOption text="話題の検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっと見る" Icon={MoreHorizIcon} />
      {/*sidebar option*/}
      {/*sidebar option*/}
      {/*sidebar option*/}
      {/*sidebar option*/}
      {/*sidebar option*/}

      {/*tweet button*/}
      <Button variant="outlined" className="sidebar--tweet" fullWidth>
        ツイートする
      </Button>
    </div>
  );
}

export default Sidebar;
