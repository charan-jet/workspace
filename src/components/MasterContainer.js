import React ,{ useEffect, useState }from 'react'
import { Routes, Route,} from "react-router-dom";

import FormContainer from "./users/FormContainer"
import DeskContainer from "./desk/DeskContainer"
import WorkspaceContanier from "./workspace/WorkspaceContainer"
import Master from './Master'
//import UsersTable from "./components/UsersTable"
import Navbar from "./Navbar"


const MasterContainer = () => {
    
    const [userDetails , setUserDetails] = useState()
    const [deskDetails , setDeskDetails] = useState()
    const [workspaceDetails , setWorkspaceDetails] = useState()

    //const [deskDetails,setDeskDetails] = useState([])
    useEffect(() => {
        const allUsers = localStorage.getItem("users")
        const loadedUsers = JSON.parse(allUsers)
        if(loadedUsers){
            setUserDetails(loadedUsers)
        }

        const allDesks = localStorage.getItem("allDesks")
        const loadedDesks = JSON.parse(allDesks)
        if(loadedDesks){
            setDeskDetails(loadedDesks)
        }
        
        const allWorkspace = localStorage.getItem("workspace")
        const loadedWorkspaces = JSON.parse(allWorkspace)

        if(loadedWorkspaces){
            setWorkspaceDetails(loadedWorkspaces)
        }
    },[])
    console.log(workspaceDetails)
    
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Master/>}/>
                <Route path="workspace" element={<WorkspaceContanier users={userDetails} desks={deskDetails} />}/>
                <Route path="users" element={<FormContainer/>}/>
                <Route path="desks" element={<DeskContainer  workspace={workspaceDetails}/>}/>
            </Routes>
        </>
    )
}

export default MasterContainer