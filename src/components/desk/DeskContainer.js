import React ,{useState , useEffect} from "react"
import ChairInputFields from "./ChairInputFields"
import Chairs from "./Chairs"
import { Card } from "primereact/card"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"


const DeskContainer = () =>{
    const [desk , setDesk] = useState([])
    const [visibility, setVisibilty] = useState(false)


    const showModal = () => {
        setVisibilty(true)
    }

    const hideModal = () => {
        setVisibilty(false)
    }
    
    const addDesk = (inputValues) => {
        const newDesk = {
            chairNumber : inputValues.chairNumber,
            chairRow : inputValues.chairRow,
            chairColumn : inputValues.chairColumn,
            chairStatus : inputValues.chairStatus
        }
        setDesk([...desk,newDesk])
    } 

    useEffect(()=>{
        const allDesks = localStorage.getItem("allDesks")
        const loadedDesks = JSON.parse(allDesks)
        
        if(loadedDesks){
            console.log(loadedDesks)
            setDesk(loadedDesks)
        }
        
    },[])

    useEffect(()=>{

        const newDesk = JSON.stringify(desk)
        localStorage.setItem("allDesks", newDesk)   

    },[desk])

    return(
        <>  
            <Card>
                <Button label="Add Chair" className="p-button-success" onClick={showModal}/>
                <Dialog visible={visibility} onHide={hideModal} draggable={false}>
                    <ChairInputFields  addChair={addDesk}/>
                </Dialog>
                <Chairs chairs={desk}/>
            </Card>
        </>
    )
}

export default DeskContainer 