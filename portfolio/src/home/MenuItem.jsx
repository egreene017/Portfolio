import React from "react";

function MenuItem(props){
    return (
        <div className="menu-item">
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{props.text}</button>
        </div>
    );
}


function handleMouseOver(){
    

}

function handleMouseOut(){
   
}

export default MenuItem