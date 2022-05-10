import React,{useState} from 'react'
import {Button} from 'primereact/button'
import {Dropdown} from 'primereact/dropdown'
import {Calendar} from 'primereact/calendar'
    

const AssignChairForm = (props) => {

    const desks = props.desks
    const users = props.users

    const [inputValues,setInputValues]=useState({
            chairNumber : null,
            userName : null,
            chairvalidity  :null
        })

    const usersList = users.map(items=>items.fname)
    const chairList = desks.map((items)=>items.chairNumber)
    
    const handleSelect = (e) => {
        console.log(e.target.name,e.target.value)
        setInputValues({
            ...inputValues,
            [e.target.name] : e.value
        })
    }
    return( 
        <>
            <form>
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
                    <Calendar className="form-input" id="chairValid" name="chairvalidity"  value={inputValues.chairvalidity} onChange={handleSelect} style={{marginTop:"5px"}} showIcon />
                </div>
                <div style={{marginTop:"20px"}}>
                    <Button label="Submit" className="p-button-success"/>
                </div>
            </form>
        </> 
    )
}

export default AssignChairForm