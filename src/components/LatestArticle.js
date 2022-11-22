import React from "react";
import LatestArticleCard from "./LatestArticleCard";
import Image from "../assets/latestarticle/1.jpg";

export default function LatestArticle() {
  return (
    <div id="latestarticle">
      <h1>Latest Articles</h1>
      <div id="latestarticle--content">
        <div id="latestarticle--left">
          <div id="latestarticle--card-container">
            <LatestArticleCard
              title={"Catch waves with an adventure guide"}
              content={
                "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
              }
              genre={"Travel"}
              date={"August 7 2017"}
              image={Image}
            />
            <LatestArticleCard
              title={"Catch waves with an adventure guide"}
              content={
                "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
              }
              genre={"Travel"}
              date={"August 7 2017"}
              image={Image}
            />
            <LatestArticleCard
              title={"Catch waves with an adventure guide"}
              content={
                "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
              }
              genre={"Travel"}
              date={"August 7 2017"}
              image={Image}
            />
            <LatestArticleCard
              title={"Catch waves with an adventure guide"}
              content={
                "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
              }
              genre={"Travel"}
              date={"August 7 2017"}
              image={Image}
            />
            <p>LOAD MORE</p>
          </div>
          <div
            id="latestarticle--gallery"
            style={{ backgroundImage: `url(${Image})` }}
          >
            <h1>Title of vertical gallery</h1>
            <p>Travel / August 7 2017</p>
          </div>
        </div>
        <div id="latestarticle--right">
          <div id="latestarticle--advertisement">
            <p>Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
