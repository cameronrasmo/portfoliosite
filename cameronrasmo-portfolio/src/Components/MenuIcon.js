import React from "react";

function MenuIcon(props) {
    return (
        <div id='burger' onClick={props.onClick} className={props.clicked}>
            <span
                style={
                    props.clicked === "clicked"
                        ? {
                              backgroundColor: "#1b1b1b",
                          }
                        : {
                              backgroundColor: "#f39696",
                          }
                }
            ></span>
            <span
                style={
                    props.clicked === "clicked"
                        ? {
                              backgroundColor: "#1b1b1b",
                          }
                        : {
                              backgroundColor: "#f39696",
                          }
                }
            ></span>
        </div>
    );
}

export default MenuIcon;
