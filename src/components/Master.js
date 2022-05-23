import React , {useEffect, useState , useRef} from 'react'
import {Button} from "primereact/button"
import { OverlayPanel } from 'primereact/overlaypanel'


const Master = () => {
    
    const [desks , setDesks] = useState([]) 
    const  deskDetails = useRef(null)

   useEffect(()=>{

        const allDesks = localStorage.getItem("allDesks")
        const loadedDesks = JSON.parse(allDesks)

        if(loadedDesks){    
            setDesks(loadedDesks)
        }

   },[])

    return(
        <>
            <div className="grid">
               <div className="col-1"></div>
               <div className="col-10">
                   <div className="grid">
                        {
                           desks.map(items =><div key={items.chairNumber} className="col-1" style={{width:"10%"}}> 
                                                    <Button icon="pi pi-user"  className="p-button-text mr-2 p-button-warning p-button-rounded p-button-sm" onClick={(e) => deskDetails.current.toggle(e)}/>    
                                                </div>
                               
                           )
                        }
                        <OverlayPanel ref={deskDetails} showCloseIcon id="overlay_panel">
                            <div>Hello</div>
                        </OverlayPanel>
                   </div>
               </div>
               <div className="col-1"></div>
            </div>
        </>
    )

}

export default Master