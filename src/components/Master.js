import React , {useEffect, useState , useRef} from 'react'
import {Button} from "primereact/button"
import { OverlayPanel } from 'primereact/overlaypanel'


const Master = () => {
    
    const [desks , setDesks] = useState([])
    const [users , setUsers] = useState([])
    const [workspaceData , setWorkspaceData] = useState([])
    const [worksapceDetails , setWorkspaceDetails] = useState([])
    const  deskDetails = useRef(null)

    const getWorkspaceDetails = (e) => {
        deskDetails.current.toggle(e)
        setWorkspaceDetails({
            id : "",
            chairNumber : e.target.name,
            userName : "Not Assigned",
            chairValidity : "Not Set",
            assigned : false  
        })
        if(e.target.name){

            workspaceData.filter(items => {
                if(items.chairNumber === e.target.name){
                    setWorkspaceDetails({
                       id : items.id,
                       chairNumber : items.chairNumber,
                       userName : items.userName,
                       chairValidity : items.chairValidity,
                       assigned : items.assigned    
                    })
                }
                return items
            })

        }

    }
    console.log(workspaceData)
    console.log(worksapceDetails)

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
            setUsers(loadedUsers)
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
                                            <Button icon="pi pi-user" name={items.chairNumber} className="p-button-text mr-2 p-button-warning p-button-rounded p-button-sm" onClick={getWorkspaceDetails}/>
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
                                    {worksapceDetails.chairNumber}
                                </div>
                                <div className="col-6">
                                    User
                                </div>
                                <div className="col-6">
                                    {worksapceDetails.userName}
                                </div>
                                <div className="col-6">
                                    Expires On
                                </div>
                                <div className="col-6">
                                    {worksapceDetails.chairValidity}
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