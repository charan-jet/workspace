import React, { useState,useEffect ,} from "react"
import { Card } from 'primereact/card' 
import { Dialog } from 'primereact/dialog' 
import {Button} from 'primereact/button'         
import InputFields from "./InputFields"
import UsersTable from "./UsersTable"
import {v4 as uuidv4} from 'uuid'
//import {Toast} from 'primereact/toast'

//import Navbar from "./Navbar"


const FormContainer = () => {
    const [details , setDetails] = useState([]);    
    const [editing , setEditing] =useState(false)
    const [userData , setUserData] = useState([])
    //const [errorMessages , setErrorMessages] = useState([])

    //const toast = useRef(null)

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

   /*  const validateName = (data) =>{
        if(data.fname===""){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Name is Required", 
                life: 3000
            }
            setErrorMessages(error =>[...error,newMsg])
        }
    }

    const validateFatherName = (data) => {
        if(data.fatherName === ""){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Father Name is Required", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }
    const showToast = () => {   
        toast.current.show(errorMessages)      
    //toast.current.show(errorMessages); 
} 
    const formValidate = (data) => {
        validateName(data)
        validateFatherName(data)
        showToast()
    }
 */
    

    

    const addDetails = (inputValue , id) => {
            
            if(editing === false){
                if(inputValue.fname !=="" && inputValue.email !==""){
                    const newDetails = {
                        id : uuidv4(),
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
                
            }
            else{
                setDetails(
                    details.map(items=>{
                        if(items.id === id){
                            items.fname = inputValue.fname
                            items.fatherName = inputValue.fatherName
                            //dob : null,
                            items.gender = inputValue.gender
                            items.mobile = inputValue.mobile
                            items.email = inputValue.email
                            items.aadhar = inputValue.aadhar
                        }
                        return items    
                    })
                    
                )   
            }

    }   

    const getDetails = (editingRowData) => {
        setEditing(true)
        setUserData(editingRowData)
       
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
                    <InputFields users={details} editingUser={userData} editMode={editing}  addUsers={addDetails} modal={showModal} closeModal={closeModal}/>
                </Dialog>
                <UsersTable users={details}  getUser={getDetails} showModal={showModal} deleteUser={deleteUser}/>
            </Card>
        </div>
    )
}

export default FormContainer