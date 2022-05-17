import React,{useState , useEffect} from 'react'
import Workspace from './Workspace'
import {Button} from 'primereact/button'
import {Dialog} from 'primereact/dialog'
import {Card} from 'primereact/card' 
import AssignChairForm from './AssingChairForm'
import  {v4 as uuidv4} from 'uuid'

const WokrspaceContainer = (props) => {
    const users = props.users;
    const desks = props.desks;
    const workspaceDetails = props.workspaceDetails;

    const [visibility,setVisibility] = useState(false)
    const [workspace,setWorkspace] = useState([])
    

    const showModal = () => {
        setVisibility(true)
    }

    const hideModal = () => {
        setVisibility(false)
    }
    
    const assignWorkspace = (inputvalues) => {
        const newWorkspace =  {
            id : uuidv4(),
            chairNumber : inputvalues.chairNumber,
            userName : inputvalues.userName,
            validity : inputvalues.chairValidity
        }
        setWorkspace([...workspace,newWorkspace])
    }

    useEffect(() => {
        const getWorkspace = localStorage.getItem("workspace")
        const loadedWorkspace = JSON.parse(getWorkspace)

        if(loadedWorkspace){
            setWorkspace(loadedWorkspace)
        }

    },[])

    useEffect(() => {
        const workspaceString = JSON.stringify(workspace)
        localStorage.setItem("workspace",workspaceString)
        
    },[workspace])

    

    return(
        <>
            <Card>
                <Button label="Assign Chair" className="p-button-success" onClick={showModal} style={{marginBottom:"20px"}}/>
                <Dialog visible={visibility} onHide={hideModal} draggable={false}>
                    <AssignChairForm users={users} desks={desks} assignChair={assignWorkspace}/>
                </Dialog>
                <Workspace workspaceDetails={workspaceDetails}/>

            </Card>
        </>
    )
}

export default WokrspaceContainer