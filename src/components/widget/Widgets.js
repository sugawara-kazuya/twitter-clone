import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--serachIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets--widgetContainer">
        <h2>ひまどうしてる？</h2>
        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId={"1675391782392315904"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="lilastaff_"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/YOASPBI_staff"}
          options={{ text: "#YOASOBI" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
