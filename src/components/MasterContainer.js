import React ,{ useEffect, useState }from 'react'
import { Routes, Route,} from "react-router-dom";

import FormContainer from "./users/FormContainer"
import DeskContainer from "./desk/DeskContainer"
import WorkspaceContanier from "./workspace/WorkspaceContainer"
//import UsersTable from "./components/UsersTable"
import Navbar from "./Navbar"


const MasterContainer = () => {
    
    const [userDetails , setUserDetails] = useState()
    const [deskDetails , setDeskDetails] = useState()
    const [workspaceDetials , setWorkspaceDetails] = useState()

    //const [deskDetails,setDeskDetails] = useState([])
    useEffect(() => {
        const allUsers = localStorage.getItem("users")
        const loadedUsers = JSON.parse(allUsers)
        setUserDetails(loadedUsers)

        const allDesks = localStorage.getItem("allDesks")
        const loadedDesks = JSON.parse(allDesks)
        setDeskDetails(loadedDesks)

        
    },[userDetails , deskDetails])

    /* useEffect(()=>{
        const allWorkspace = localStorage.getItem("workspace")
        const loadedWorkspaces = JSON.parse(allWorkspace)
        setWorkspaceDetails(loadedWorkspaces)
    },[]) */
    
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<WorkspaceContanier users={userDetails} desks={deskDetails}/>}/>
                <Route path="/workspace" element={<WorkspaceContanier users={userDetails} desks={deskDetails} workspaceDetails={workspaceDetials}/>}/>
                <Route path="users" element={<FormContainer/>}/>
                <Route path="desks" element={<DeskContainer />}/>
            </Routes>
        </>
    )
}

export default MasterContainer