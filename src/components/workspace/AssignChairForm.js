import React,{useState , useRef ,useEffect} from 'react'
import {Button} from 'primereact/button'
import {Dropdown} from 'primereact/dropdown'
import {Calendar} from 'primereact/calendar'
import {Toast} from "primereact/toast"
import { format } from "date-fns";

const AssignChairForm = (props) => {

    const [desks,setDesks] = useState(props.desks)
    const [users,setUsers] = useState(props.users)
    const [errorMessages , setErrorMessages] = useState([])
    const toast = useRef(null)
    //const workspaceData = useState([])

    const [inputValues,setInputValues]=useState({
            chairNumber : null,
            userName : null,
            chairValidity  :null,
            assigned : false
        })
    
    const usersList = users.map(items=>items.fname)
    const chairList = desks.map((items)=>items.chairNumber)

    useEffect(()=>{

        const allDesks =  localStorage.getItem("allDesks")
        const loadedDesks = JSON.parse(allDesks)

        if(loadedDesks){
            setDesks(loadedDesks)
        }

        const allUsers = localStorage.getItem("users")
        const loadedUsers = JSON.parse(allUsers)

        if(loadedUsers){
            setUsers(loadedUsers)
        }
        
    },[])

    const handleSelect = (e) => {
        console.log(e.target.name,e.target.value)
        
        setInputValues({
            ...inputValues,
            [e.target.name] : e.target.value,

        })

    }

    
    const handleDate = (e) =>{

        const validity = new Date(e.value)
        const date = format( validity, "dd/MM/yyyy")

        console.log(date)
        
        setInputValues({
            ...inputValues,
            chairValidity : date
        })
    }

    const showToast = (msg) => {    
        toast.current.show(msg); 
        return true
    }

    //validations start
    const validateChair = () => {
        if(inputValues.chairNumber === "" || inputValues.chairNumber === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Please Select Chair Number", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }

    const validateUser = () => {
        if(inputValues.userName === "" || inputValues.userName === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Please Select User", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }

    const validateChairValidity = () => {
        if(inputValues.chairValidity === "" || inputValues.chairValidity === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Please Select Valid Upto Date",
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }
    //validations end

    //calling all validations in a function
    const validateForm = () => {
        validateChair()
        validateUser()
        validateChairValidity()
    }

    const assignChairHandler = () => {
        validateForm()
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        showToast(errorMessages)

        if(showToast() === true){
            setErrorMessages([])
        }

        if(errorMessages.length === 0){
           props.assignChair(inputValues)
            
           inputValues.assigned = true
            
           console.log(inputValues)
           setInputValues({
            chairNumber : null,
            userName : null,
            chairValidity  :null,
            assigned : false
           })

        }


    }


    return( 

        <>
            <Toast ref={toast}/>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="chairNum" >Chair Number</label>
                    <Dropdown id="chairNum" options={chairList} className="p-inputtext-sm"  name="chairNumber" value={inputValues.chairNumber} onChange={handleSelect} style={{marginTop:"5px"}}/>
                </div>  
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="userName">User Name</label>
                    <Dropdown id="userName" options={usersList} className="p-inputtext-sm"  name="userName" value={inputValues.userName} onChange={handleSelect} style={{marginTop:"5px"}}/>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="chairvalid">Valid Upto</label>
                    <Calendar className="form-input" dateFormat="dd/mm/yy" id="chairValid" name="chairValidity"  value={inputValues.chairvalidity} onChange={handleDate} style={{marginTop:"5px"}} showIcon />
                </div>
                <div style={{marginTop:"20px"}}>
                    <Button label="Submit" className="p-button-success" onClick={assignChairHandler}/>
                </div>
            </form>
        </> 
        
    )
}

export default AssignChairForm