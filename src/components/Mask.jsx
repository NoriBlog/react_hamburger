import React from "react";

const Mask = ({open , setOpen}) => {

    const changeType = () => {
        setOpen(!open)
    };

    return (

        <div className = "toggle-mark" onClick = {changeType}>
            <span className = {`toggle ${open ? "open" : ""}`}></span>
            <span className = {`toggle ${open ? "open" : ""}`}></span>
            <span className = {`toggle ${open ? "open" : ""}`}></span>
        </div>

    );
};

export default Mask;