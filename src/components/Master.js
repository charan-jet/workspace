import React , {useEffect, useState} from 'react'
import {Button} from "primereact/button"


const Master = () => {
    
    const [workspace , setWorkspace] = useState([]) 

   useEffect(()=>{

        const allWorkspace = localStorage.getItem("workspace")
        const loadedWorkspace = JSON.parse(allWorkspace)

        if(loadedWorkspace){    
            setWorkspace(loadedWorkspace)
        }

   },[])

    return(
        <>
            <div className="grid">
               <div className="col-1"></div>
               <div className="col-10">
                   <div className="grid">
                       {
                           workspace.map(items =><div key={items.chairNumber} className="col-1">
                                                    <Button icon="pi pi-user"  className="p-button-text mr-2 p-button-warning p-button-rounded p-button-sm" />    
                                                </div>
                               
                           )
                       }
                        
                   </div>
               </div>
               <div className="col-1"></div>
            </div>
        </>
    )

}

export default Master