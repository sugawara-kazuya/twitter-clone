import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    /* firebaseにデータを追加する */
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      username: "菅原和也",
      verified: true,
      text: tweetMessage,
      avatar: "https://www.google.com/search?sxsrf=AB5stBh-ZfHZSQlp2U36jbkA3b0ejVDxWg:1690469949217&q=%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%94%BB%E5%83%8F&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwja-s2mk6-AAxWumFYBHYAUDbsQ0pQJegQIFRAB&biw=1920&bih=911&dpr=2#imgrc=X-c9IDNoCIFYLM",
      image: tweetImage,
      timestamp: serverTimestamp(),
    })
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input
            value={tweetMessage}
            placeholder="いまどうしてる？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
          ></input>
        </div>
        <input
          value={tweetImage}
          className="tweetBox--imageInput"
          placeholder="画像のUrlを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
        ></input>
        <Button className="tweetBox--tweetButton" type="submit"
          onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
