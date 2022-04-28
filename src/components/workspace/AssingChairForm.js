import React,{useEffect, useState} from 'react'
import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'
import {Dropdown} from 'primereact/dropdown'


const AssignChairForm = (props) => {

    const desks = props.desks
    const users = props.users

    const [inputValues,setInputValues]=useState()
    const [chairsList , setChairList] =useState([{label : ""}])
    const chairNumbers = desks.map((items) => items.chairNumber)
    
    
    useEffect(()=>{
        chairNumbers.map((items)=>{
            const  newChairNumber = {label : items}
            setChairList([...chairsList,newChairNumber])
        })
    },[chairNumbers])

    return(
        <>
            <form>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="chairNum">Chair Number</label>
                    <InputText id="chairNum" className="p-inputtext-sm" name="chairNumber" value={inputValues}/>
                    <Dropdown id="chairNum"  className="p-inputtext-sm"  name="chairNumber" value={inputValues} />
                </div>  
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="userName">User Name</label>
                    <InputText id="userName" className="p-inputtext-sm" name="chairNumber" value={inputValues}/>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="chairvalid">Valid Upto</label>
                    <InputText id="chairValid" className="p-inputtext-sm" name="chairNumber" value={inputValues}/>
                </div>
                <div style={{marginTop:"20px"}}>
                    <Button label="Submit" className="p-button-success"/>
                </div>
            </form>
        </> 
    )
}

export default AssignChairForm