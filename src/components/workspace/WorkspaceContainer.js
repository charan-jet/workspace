import React,{useState} from 'react'
import Workspace from './Workspace'
import {Button} from 'primereact/button'
import {Dialog} from 'primereact/dialog'
import {Card} from 'primereact/card' 
import AssignChairForm from './AssingChairForm'

const WokrspaceContainer = (props) => {
    const users = props.users;
    const desks = props.desks;
    console.log(users, desks)
    
    const [visibility,setVisibility] = useState(false)

    const showModal = () => {
        setVisibility(true)
    }

    const hideModal = () => {
        setVisibility(false)
    }
   
    return(
        <>
            <Card>
                <Button label="Assign Chair" className="p-button-success" onClick={showModal} style={{marginBottom:"20px"}}/>
                <Dialog visible={visibility} onHide={hideModal}>
                    <AssignChairForm/>
                </Dialog>
                <Workspace/>

            </Card>
        </>
    )
}

export default WokrspaceContainer