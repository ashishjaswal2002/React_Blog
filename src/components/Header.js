import React from "react";
import HeaderCard from "./HeaderCard";
import Image1 from "../assets/header/1.jpg";
import Image2 from "../assets/header/2.jpg";
import Image3 from "../assets/header/3.jpg";

export default function Header() {
  const [focusId, setFocusId] = React.useState("1");

  function changeFocus(id) {
    setFocusId(id);
  }

  return (
    <div id="header">
      <HeaderCard
        backgroundImage={Image1}
        title="Title of vertical gallery"
        genre="Travel"
        date="August 21 2017"
        uid="1"
        handleClick={changeFocus}
        focusedId={focusId}
      />
      <HeaderCard
        backgroundImage={Image2}
        title="The Sound cloud"
        genre="Travel"
        date="August 21 2018"
        uid="2"
        handleClick={changeFocus}
        focusedId={focusId}
      />
      <HeaderCard
        backgroundImage={Image3}
        title="The Sound cloud"
        genre="Travel"
        date="August 21 2019"
        uid="3"
        handleClick={changeFocus}
        focusedId={focusId}
      />
    </div>
  );
}
