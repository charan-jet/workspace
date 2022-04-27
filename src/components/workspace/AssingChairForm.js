import React,{useState} from 'react'
import {InputText} from 'primereact/inputtext'
import {Button} from 'primereact/button'
const AssignChairForm = () => {

    const [inputValues,setInputValues]=useState()

    return(
        <>
            <form>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="chairNum">Chair Number</label>
                    <InputText id="chairNum" className="p-inputtext-sm" name="chairNumber" value={inputValues}/>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="userName">User Name</label>
                    <InputText id="userName" className="p-inputtext-sm" name="chairNumber" value={inputValues}/>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <label htmlFor="chairStat">Chair Status</label>
                    <InputText id="chairStat" className="p-inputtext-sm" name="chairNumber" value={inputValues}/>
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