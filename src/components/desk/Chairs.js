import React from "react"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import {Button} from 'primereact/button'

const Chairs = (props) =>{
    const emptyMessage = "No Desks Availalble, Please add new Desks"
    const loadedChairs = props.chairs


    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-text mr-2 p-button-warning p-button-rounded p-button-sm" onClick={(e)=>editChair(rowData)}/>
                <Button icon="pi pi-trash" className="p-button-text p-button-danger p-button-rounded p-button-sm" onClick={(e)=>removeChair(rowData)}/>
            </React.Fragment>
        );
    }

    const editChair = (rowData) => {
        props.getChair(rowData)
        props.showModal()
    }

    const removeChair = (rowData) => {
        props.deleteDesk(rowData)
    }

    return(
        <div style={{marginTop:"30px"}}>
            <DataTable value={loadedChairs} emptyMessage={emptyMessage} size="small">
                <Column key="chairNum" field="chairNumber" header="Chair Number"/>
                <Column key="chairRow" field="chairRow" header="Chair Row"/>
                <Column key="chairCol" field="chairColumn" header="Chair Column"/>
                <Column key="chairStat" field="chairStatus" header="Chair Status"/>
                <Column  body={actionBodyTemplate} exportable={false} /> 
            </DataTable>
        </div>
    )
}

export default Chairs