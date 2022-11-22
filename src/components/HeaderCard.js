import React from "react";

export default function HeaderCard(props) {
  return (
    <div
      id="header--card"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
      className={props.focusedId === props.uid && "focus"}
      onClick={() => props.handleClick(props.uid)}
    >
      <h2>{props.title}</h2>
      <p>
        {props.genre} / {props.date}
      </p>
    </div>
  );
}
