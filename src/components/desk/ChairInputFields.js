import React , {useState} from "react"
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import {Dropdown} from "primereact/dropdown"

const ChairInputFields = (props) => {

    const [inputValue , setInputValue] = useState({
        chairNumber : "",
        chairRow : "",
        chairColumn : "",
        chairStatus : ""
    })

    const [chairStatus , setChairStatus] = useState(null)
    const handleInput = (e) =>{
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
    }
    const stausOptions = [
        {label : "Occupied"},
        {label : "Vacant"}
    ]

    const handleSelect = (e) => {
        setChairStatus(e.value)
        setInputValue({
            ...inputValue,
            [e.target.name] : e.value.label
        })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addChair(inputValue)
        setInputValue({
            chairNumber : "",
            chairRow : "",
            chairColumn : "",
            chairStatus : ""
        })
        setChairStatus(null)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairNum">Chair Number</label>
                <InputText id="chariNum" className="p-inputtext-sm"  name="chairNumber" value={inputValue.chairNumber} onChange={handleInput}/>
            </div>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairNum">Chair Row</label>
                <InputText id="chariNum" className="p-inputtext-sm"  name="chairRow" value={inputValue.chairRow} onChange={handleInput}/>
            </div>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairNum">Chair Column</label>
                <InputText id="chariNum" className="p-inputtext-sm"  name="chairColumn" value={inputValue.chairColumn} onChange={handleInput}/>
            </div>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairStat">Chair Status</label>
                <Dropdown id="chairStat" className="p-inputtext-sm" options={stausOptions}  name="chairStatus" value={chairStatus} onChange={handleSelect}/>
            </div>
            <div style={{marginTop:"20px"}}>
                <Button label="Add Chair" className="p-button-success"/>
            </div>
        </form>
    )
}

export default ChairInputFields