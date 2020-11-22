import React from "react";
import MenuItem from "./MenuItem";

function MenuBar(){
    return (
        <div className="menu-bar">
            <MenuItem text="About Me"/>
            <MenuItem text="Resume"/>
            <MenuItem text="Projects"/>
            <MenuItem text="Races"/>
        </div>
    );
}


export default MenuBar;