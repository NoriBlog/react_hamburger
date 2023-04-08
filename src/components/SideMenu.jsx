import React from "react";
import {MenuData} from "./MenuData.jsx";

const SideMenu = ({open,setOpen}) => {

    return (

        <div className = {`side-menu ${open ? "indicate" : ""}`}>
            <ul className = "menu-list">
                {MenuData.map((value , key)=>{
                    return (
                        <li className = "row" key = {key} onClick = {()=>{
                            window.location.pathname = value.link;
                        }}>
                            {value.title}
                        </li>
                    )
                })}
            </ul>
        </div>

    );
};

export default SideMenu;