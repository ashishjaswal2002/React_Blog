import React from "react";
import TheLatestCard from "./TheLatestCard";
import Image from "../assets/thelatest/1.jpg";

export default function TheLatest() {
  return (
    <div id="thelatest">
      <h1>The Latest</h1>
      <div id="thelatest--card-container">
        <TheLatestCard
          image={Image}
          title={"Joshua Tree Overnight Adventure"}
          content={
            "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
          }
          genre={"Travel"}
          date={"August 21 2017"}
        />
        <TheLatestCard
          image={Image}
          title={"Joshua Tree Overnight Adventure"}
          content={
            "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
          }
          genre={"Travel"}
          date={"August 21 2017"}
        />
        <TheLatestCard
          image={Image}
          title={"Joshua Tree Overnight Adventure"}
          content={
            "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
          }
          genre={"Travel"}
          date={"August 21 2017"}
        />
      </div>
    </div>
  );
}
