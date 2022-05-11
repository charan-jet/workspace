import React, { useEffect, useState } from "react"
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button';
/* import {Calendar} from 'primereact/calendar' */
import {Dropdown} from 'primereact/dropdown'



const InputFields = (props) => {

    const [inputValue , setInputValue] = useState({
        fname : "",
        fatherName : "",
        //dob : null,
        gender : null,
        mobile : "",
        email : "",
        aadhar : ""
    });

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
    
    const submitHandler = (e) =>{
        e.preventDefault();
        props.addUsers(inputValue ,props.editingUser.id);
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
    

    const gender = ["Male", "Female", "Other"]
    
    return(
        <>
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
                <Button label="Submit" className="p-button-success" />
            </div>
        </form>
        </>
    )
}

export default InputFields