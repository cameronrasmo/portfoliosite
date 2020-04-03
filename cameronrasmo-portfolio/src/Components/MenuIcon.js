import React from "react";

function MenuIcon(props) {
  return (
    <div id='burger' onClick={props.onClick} className={props.clicked}>
      <span></span>
      <span></span>
    </div>
  );
}

export default MenuIcon;
