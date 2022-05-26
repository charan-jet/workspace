import React ,{useState , useEffect} from "react"
import ChairInputFields from "./ChairInputFields"
import Chairs from "./Chairs"
import { Card } from "primereact/card"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import {v4 as uuidv4} from 'uuid'


const DeskContainer = (props) =>{
    const [desk , setDesk] = useState([])
    const [visibility, setVisibilty] = useState(false)
    const [editing , setEditing] = useState(false)
    const [chairData , setChairData] = useState([])
    const worksapce = props.worksapce
    
    const showModal = () => {
        setVisibilty(true)
    }

    const hideModal = () => {
        setVisibilty(false)
    }
    
    const addDesk = (inputValues , id) => {
        if(editing === false){
            const newDesk = {
                id : uuidv4(),
                chairNumber : inputValues.chairNumber,
                chairRow : inputValues.chairRow,
                chairColumn : inputValues.chairColumn,
                chairStatus : inputValues.chairStatus,
            }
            setDesk([...desk,newDesk])
        }else{
            desk.map(items => {
                if(items.id === id){
                    items.chairNumber = inputValues.chairNumber
                    items.chairRow = inputValues.chairRow
                    items.chairColumn = inputValues.chairColumn
                    items.chairStatus = inputValues.chairStatus
                }
                return items
            })
        }
    } 
    console.log(desk)
    const deleteDesk = (data) => {
        setDesk(desk.filter(chair => {
            return data !== chair
        }))
    }

    const getDesk = (editingRowData) => {
        setEditing(true)
        setChairData(editingRowData)
       
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
                    <ChairInputFields  addChair={addDesk} editingChair={chairData} editMode={editing} showModal={showModal} />
                </Dialog>
                <Chairs chairs={desk} deleteDesk={deleteDesk} getChair={getDesk} showModal={showModal} />
            </Card>
        </>
    )
}

export default DeskContainer 