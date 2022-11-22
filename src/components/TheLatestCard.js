import React from "react";

export default function TheLatestCard(props) {
  return (
    <div id="thelatestcard">
      <div
        id="thelatestcard--image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div id="thelatestcard--content">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p style={{marginTop: "20px"}}>
          <span style={{ color: "#404040" }}>{props.genre}</span> / {props.date}
        </p>
      </div>
    </div>
  );
}
