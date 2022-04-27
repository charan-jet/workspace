import React ,{ useState }from 'react'
import { Routes, Route,} from "react-router-dom";

import FormContainer from "./users/FormContainer"
import DeskContainer from "./desk/DeskContainer"
import WorkspaceContanier from "./workspace/WorkspaceContainer"
//import UsersTable from "./components/UsersTable"
import Navbar from "./Navbar"


const MasterContainer = () => {
    const allUsers = localStorage.getItem("users")
    const loadedUsers = JSON.parse(allUsers)
    const[userDetails] = useState([loadedUsers])

    const allDesks = localStorage.getItem("allDesks")
    const loadedDesks = JSON.parse(allDesks)
    const [deskDetails] = useState([loadedDesks])
    //const [deskDetails,setDeskDetails] = useState([])

    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<WorkspaceContanier users={userDetails} desks={deskDetails}/>}/>
                <Route path="users" element={<FormContainer/>}/>
                <Route path="desks" element={<DeskContainer />}/>
            </Routes>
        </>
    )
}

export default MasterContainer