import React, { useState,useEffect ,useRef} from "react"
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';
/* import {Calendar} from 'primereact/calendar' */
import {Dropdown} from 'primereact/dropdown'
import {Toast} from 'primereact/toast'




const InputFields = (props) => {

    const [errorMessages , setErrorMessages] = useState([])
    const [inputValue , setInputValue] = useState({
        fname : "",
        fatherName : "",
        //dob : null,
        gender : null,
        mobile : "",
        email : "",
        aadhar : ""
    });
    const toast = useRef(null)
    useEffect(()=>{
        if(props.editMode === true){
            setInputValue(props.editingUser)
        }
    },[props.editMode,props.editingUser])

    /* let calendar = new Date() */
    /* const [date,setDate] = useState(calendar) */

    
    const inputHandler = (e) => {
       setInputValue({
           ...inputValue,
           [e.target.name] : e.target.value
        })
        
    }

    //form validations start
    const validateName = () =>{
        if(inputValue.fname===""){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Name is Required", 
                life: 3000
            }
            setErrorMessages(error =>[...error,newMsg])
        }
    }

    const validateFatherName = () => {

        if(inputValue.fatherName === ""){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Father Name is Required", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }
    const validateGender = () =>{
        if(inputValue.gender===null){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Gender is Required", 
                life: 3000
            }
            setErrorMessages(error =>[...error,newMsg])
        }
    }
    const validateMobile = () =>{
        if(inputValue.mobile===""){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Mobile Number is Required", 
                life: 3000
            }
            setErrorMessages(error =>[...error,newMsg])
        }
    }
    const validateEmail = () =>{
        if(inputValue.email===""){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Email Id is Required", 
                life: 3000
            }
            setErrorMessages(error =>[...error,newMsg])
        }
    }
    const validateAadhar = () =>{
        if(inputValue.aadhar === "" || inputValue.aadhar.length !== 12){
            const newMsg = {
                severity:'error', 
                summary: 'Error Message', 
                detail:"Aadhar Number is Required and should not be more or less than 12 digits", 
                life: 3000
            }
            setErrorMessages(error =>[...error,newMsg])
        }
    }
//form validations end
    const showToast = (msg) => {    
        toast.current.show(msg); 
        return true
    }

    //calling form validations in a function
    const formValidate = () => {
        validateName() //for validating name
        validateFatherName()  //for validating father name
        validateGender() //for validating gender
        validateMobile() //for validating mobile
        validateEmail() // for validating email
        validateAadhar() //for validating aadhar

    }

    const submitHandler = (e) =>{
        
        console.log(errorMessages)
        e.preventDefault();
        if(errorMessages.length === 0){
            props.addUsers(inputValue ,props.editingUser.id);
        }
        showToast(errorMessages)
        
        if(showToast() === true){
            setErrorMessages([])
        }
        if(errorMessages.length === 0){
            setInputValue({
                fname : "",
                fatherName : "",
                //dob : null,
                gender : null,
                mobile : "",
                email : "",
                aadhar : ""
            })  
        }
        
    }
    

    const gender = ["Male", "Female", "Other"]
    
    return(
        <>
         <Toast ref={toast}/>
        <form onSubmit={submitHandler} >
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="fname">Full Name</label>
                <InputText id="fname" className="p-inputtext-sm"  name="fname" value={inputValue.fname} onChange={inputHandler} />
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="fatherName">Father Name</label>
                <InputText id="fatherName" name="fatherName" className="p-inputtext-sm" onChange={inputHandler} value={inputValue.fatherName}/>
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="userGender">Gender</label>
                <Dropdown id="userGender" options={gender} className="p-inputtext-sm"  name="gender" value={inputValue.gender} onChange={inputHandler} style={{marginTop:"5px"}}/>
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="userNum" >Mobile Number</label>
                <InputText id="userNum" keyfilter="num" className="block" name="mobile" onChange={inputHandler} value={inputValue.mobile} />
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="userMail" >Mail Id</label>
                <InputText id="userMail" keyfilter="email" className="block" name="email" onChange={inputHandler} value={inputValue.email} />
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="userAadhar" >Aadhar </label>
                <InputText id="userAadhar" keyfilter="num" className="block" name="aadhar" onChange={inputHandler} value={inputValue.aadhar} />
            </div>
            <div style={{marginTop:"20px"}}>
                <Button label="Submit" className="p-button-success" onClick={formValidate}/>
            </div>
        </form>
        </>
    )
}

export default InputFields