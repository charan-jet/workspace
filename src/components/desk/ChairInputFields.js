import React , {useState , useRef , useEffect} from "react"
import {InputText} from "primereact/inputtext"
import {Button} from "primereact/button"
import {Dropdown} from "primereact/dropdown"
import {Toast} from "primereact/toast"

const ChairInputFields = (props) => {

    const [inputValue , setInputValue] = useState({
        chairNumber : "",
        chairRow : "",
        chairColumn : "",
        chairStatus : null
    })
    const [errorMessages , setErrorMessages] = useState([])
    const toast = useRef(null)
    const regExp = [0-9]

    //form validation start//
    const validateChairNumber = () => {
        if(inputValue.chairNumber === "" || inputValue.chairNumber === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Chair Number is Required", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }

    const validateChairRow = () => {
        if(inputValue.chairRow === "" || inputValue.chairRow === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Chair Row is Required", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
        else if(inputValue.chairRow !== regExp){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Chair Row Must Be a Number", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }
    
    const validateChairColumn = () => {
        if(inputValue.chairColumn === "" || inputValue.chairColumn === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Chair Column is Required", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }

        if(inputValue.chairColumn !== regExp){
                const newMsg = {
                    severity:'error', 
                    summary: 'Error', 
                    detail:"Chair Row Must Be a Number", 
                    life: 3000
                }
                setErrorMessages(error=>[...error,newMsg])
            }
        
    }

    const validateChairStatus = () => {
        if(inputValue.chairStatus === "" || inputValue.chairStatus === null){
            const newMsg = {
                severity:'error', 
                summary: 'Error', 
                detail:"Chair Status is Required", 
                life: 3000
            }
            setErrorMessages(error=>[...error,newMsg])
        }
    }
    //form validations end//


    //calling form vallidation in a function//
    const validateForm = () => {
        validateChairNumber()
        validateChairRow()
        validateChairColumn()
        validateChairStatus()
    }

    const showToast = (msg) => {    
        toast.current.show(msg); 
        return true
    }

    const handleInput = (e) =>{
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
    }
    const stausOptions = ["Occupied", "Vacant"]

   /*  const handleSelect = (e) => {
        setChairStatus(e.value)
        setInputValue({
            ...inputValue,
            [e.target.name] : e.value
        })
    }  */

    const handleSubmit = (e) => {
        e.preventDefault();
        if(errorMessages.length === 0){
            props.addChair(inputValue , props.editingChair.id)
            setInputValue({
                chairNumber : "",
                chairRow : "",
                chairColumn : "",
                chairStatus : null
            })
        }

        if(showToast() === true){
            setErrorMessages([])
        }

        showToast(errorMessages)
        
    }

    useEffect(()=>{
        if(props.editMode === true){
            setInputValue(props.editingChair)
        }
    },[props.editMode,props.editingChair])

    return(
        <>
        <Toast ref={toast}/>
        <form onSubmit={handleSubmit}>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairNum">Chair Number</label>
                <InputText id="chariNum" className="p-inputtext-sm"  name="chairNumber" value={inputValue.chairNumber} onChange={handleInput}/>
            </div>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairRow">Chair Row</label>
                <InputText id="chairRow" className="p-inputtext-sm" keyfilter="int" name="chairRow" value={inputValue.chairRow} onChange={handleInput}/>
            </div>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairCol">Chair Column</label>
                <InputText id="chairCol" className="p-inputtext-sm" keyfilter="int" name="chairColumn" value={inputValue.chairColumn} onChange={handleInput}/>
            </div>
            <div className="field" style={{marginBottom:"10px"}}>
                <label htmlFor="chairStat">Chair Status</label>
                <Dropdown id="chairStat" className="p-inputtext-sm" options={stausOptions}  name="chairStatus" value={inputValue.chairStatus} onChange={handleInput}/>
            </div>
            <div style={{marginTop:"20px"}}>
                <Button label="Add Chair" className="p-button-success" onClick={validateForm}/>
            </div>
        </form>
        </>
    )
}

export default ChairInputFields