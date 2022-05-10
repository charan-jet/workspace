import React, { useState,useEffect } from "react"
import { Card } from 'primereact/card' 
import { Dialog } from 'primereact/dialog' 
import {Button} from 'primereact/button'         
import InputFields from "./InputFields"
import UsersTable from "./UsersTable"

//import Navbar from "./Navbar"


const FormContainer = () => {
    const [details , setDetails] = useState([]);    
    const [editing , setEditing] =useState(false)
    const [userData , setUserData] = useState([])

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

    const addUser = () =>{
        showModal()
        setEditing(false)
    }

  

    const closeModal = (inputValue) =>{
        if(inputValue.fname ==="" && inputValue.emial ===""){
            showModal()
        }
        else{
            hideModal()
        }
    }

    
    const addDetails = (inputValue) => {
            if(editing === false){
                if(inputValue.fname !=="" && inputValue.email !==""){
                    const newDetails = {
                        id : inputValue.id,
                        fname : inputValue.fname,
                        fatherName : inputValue.fatherName,
                        //dob : null,
                        gender : inputValue.gender,
                        mobile : inputValue.mobile,
                        email : inputValue.email,
                        aadhar : inputValue.aadhar
                    }
                    setDetails([...details,newDetails])
                }
                else{
                    alert("First Name and Email Id is required")
                }
            }else{
                setDetails(
                    details.map(items=>{
                        if(items.id === inputValue.id){
                            items = inputValue
                        }
                        return inputValue
                    })
                )
            }
    }   

    const getDetails = (editingRowData) => {
        setEditing(true)
        setUserData(editingRowData)
        console.log(editingRowData.id)
    }

    const deleteUser = (userId) => {
       setDetails( details.filter(users=>{
        return userId !== users
    }))
    }


    return(
        <div>   
            
            <Card>
                <Button label="Add User" className="p-button-success" onClick={addUser}/>   
                <Dialog header="Add User" visible={visibile} modal="true" onHide={hideModal} draggable={false}>
                    <InputFields users={details} editingUser={userData} editMode={editing}  addUsers={addDetails} closeModal={closeModal}/>
                </Dialog>
                <UsersTable users={details}  getUser={getDetails} showModal={showModal} deleteUser={deleteUser}/>
            </Card>
        </div>
    )
}

export default FormContainer