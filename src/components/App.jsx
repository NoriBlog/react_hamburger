import React , {useState} from "react";
import Title from "./Title";
import Mask from "./Mask";
import SideMenu from "./SideMenu";

const App = () => {

    const [open , setOpen] = useState(false);

    return (

        <div className = "hamburger">
            <Title />
            <Mask open = {open} setOpen = {setOpen} />
            <SideMenu open = {open} setOpen = {setOpen}/>
        </div>

    );
};

export default App;