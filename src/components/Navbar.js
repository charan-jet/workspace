import React from "react"
import { Menubar } from "primereact/menubar"
import {useNavigate} from "react-router-dom";


const Navbar = () =>{
    const navigate = useNavigate()
    const items =[
        {
            label : "Home",
            command : () => {navigate("/")}
        },
        {
            label : "Users",
            command :()=>{navigate("/users")}
        },  
        {
            label : "Desks",
            command : () => {navigate("/desks")}
        }
    ]

    return(
        <Menubar model={items}/>
    )
}

export default Navbar