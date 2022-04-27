import React, { useState } from "react"
import { InputText } from 'primereact/inputtext';
import {Button} from 'primereact/button'

const InputFields = (props) => {
    const [inputValue , setInputValue] = useState({
        fname : "",
        lname : "",
        email : ""
    });
    const inputHandler = (e) => {
       setInputValue({
           ...inputValue,
           [e.target.name] : e.target.value
        })
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        props.addUsers(inputValue);
        setInputValue({
            fname : "",
            lname : "",
            email : ""
        })
    }
    
    const checkValues = (inputValue) =>{
        props.closeModal(inputValue)
    }
    return(
        <>
        <form onSubmit={submitHandler} >
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="fname">First Name</label>
                <InputText id="fname" className="p-inputtext-sm"  name="fname" value={inputValue.fname} onChange={inputHandler} />
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="lname">Last Name</label>
                <InputText id="lname" name="lname" className="p-inputtext-sm" onChange={inputHandler} value={inputValue.lname}/>
            </div>
            <div style={{marginBottom:"10px"}}>
                <label htmlFor="userMail" >Mail Id</label>
                <InputText id="userMail" keyfilter="email" className="block" name="email" onChange={inputHandler} value={inputValue.email} />
            </div>
            <div style={{marginTop:"20px"}}>
                <Button label="Submit" className="p-button-success" onClick={checkValues}/>
            </div>
        </form>
        </>
    )
}

export default InputFields