import React , {useEffect, useState , useRef} from 'react'
import {Button} from "primereact/button"
import { OverlayPanel } from 'primereact/overlaypanel'


const Master = () => {
    
    const [desks , setDesks] = useState([])
    const [users , setusers] = useState([])
    const [workspaceData , setWorkspaceData] = useState([])
    const  deskDetails = useRef(null)

   useEffect(()=>{

        const allDesks = localStorage.getItem("allDesks")
        const loadedDesks = JSON.parse(allDesks)

        if(loadedDesks){    
            setDesks(loadedDesks)
        }

        const allWorkspace = localStorage.getItem("workspace")
        const loadedWorkspace = JSON.parse(allWorkspace)

        if(loadedWorkspace){
            setWorkspaceData(loadedWorkspace)
        }

        const allUsers = localStorage.getItem("users")
        const loadedUsers = JSON.parse(allUsers)

        if(loadedUsers){
            setusers(loadedUsers)
        }

   },[])

    return(
        <>
            <div className="grid">
               <div className="col-1"></div>
               <div className="col-10">
                   <div className="grid">
                        {
                           desks.map(items =>{

                                return (
                                        <div key={items.id} className="col-1" style={{width:"10%"}} > 
                                            <Button icon="pi pi-user" className="p-button-text mr-2 p-button-warning p-button-rounded p-button-sm" onClick={(e)=>deskDetails.current.toggle(e)}/>
                                        </div>
                                        )
                            })
                        
                        }   
                   </div>
                   <OverlayPanel ref={deskDetails} showCloseIcon id="overlay_panel">
                        <div className="grid">
                            <div className="col-6">
                                Chair Number
                            </div>
                            <div className="col-6">
                                {workspaceData.chairNumber}
                            </div>
                            <div className="col-6">
                                User
                            </div>
                            <div className="col-6">
                                {workspaceData.userName}
                            </div>
                            <div className="col-6">
                                Expires On
                            </div>
                            <div className="col-6">
                                {workspaceData.chairValidity}
                            </div>
                        </div>
                    </OverlayPanel>
               </div>
               <div className="col-1"></div>
            </div>
        </>
    )

}

export default Master