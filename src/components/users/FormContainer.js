import React, { useState,useEffect } from "react"
import { Card } from 'primereact/card' 
import { Dialog } from 'primereact/dialog' 
import {Button} from 'primereact/button'         
import InputFields from "./InputFields"
import UsersTable from "./UsersTable"
//import Navbar from "./Navbar"


const FormContainer = () => {
    const [details , setDetails] = useState([]);    

    const addDetails = (inputValue) => {
        if(inputValue.fname !=="" && inputValue.email !==""){
            const newDetails = {
                fname : inputValue.fname,
                lname : inputValue.lname,
                email : inputValue.email
            }
            setDetails([...details,newDetails])
        }
        else{
            alert("First Name and Email Id is required")
        }
    }   

    useEffect(()=>{
        const allUsers = localStorage.getItem("users")
        const loadedUsers = JSON.parse(allUsers)
        if(loadedUsers){
           setDetails(loadedUsers)
        }

    },[])


    useEffect(()=>{
        const addUserDetails = JSON.stringify(details)
        localStorage.setItem("users",addUserDetails)

    },[details])
    
    const [visibile,setVisibilty] = useState(false)

    const showModal=()=>{
        setVisibilty(true)
    }

    const hideModal = () => {
        setVisibilty(false)
    }

    const closeModal = (inputValue) =>{
        if(inputValue.fname ==="" && inputValue.emial ===""){
            showModal()
        }
        else{
            hideModal()
        }
    }

    return(
        <div>   
            
            <Card>
                <Button label="Add User" className="p-button-success" onClick={showModal}/>   
                <Dialog header="Add User" visible={visibile} modal="true" onHide={hideModal} draggable={false}>
                    <InputFields users={details} addUsers={addDetails} closeModal={closeModal}/>
                </Dialog>
                <UsersTable users={details}/>
            </Card>
        </div>
    )
}

export default FormContainer