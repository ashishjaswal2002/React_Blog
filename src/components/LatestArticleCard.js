import React from "react";

export default function LatestArticleCard(props) {
  return (
    <div id="latestarticlecard">
      <div
        id="latestarticlecard--image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div id="latestarticlecard--content">
        <h1>{props.title}</h1>
        <p style={{ marginTop: "10px" }}>{props.content}</p>
        <p style={{ marginTop: "30px" }}>
          {props.genre} / {props.date}
        </p>
      </div>
    </div>
  );
}
