import React from "react"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"

const Chairs = (props) =>{
    const emptyMessage = "No Desks Availalble, Please add new Desks"
    const loadedChairs = props.chairs
    const columns = [
        {field : "chairNumber",header:"Chair Number"},
        {field : "chairRow",header:"Chair Row"},
        {field : "chairColumn",header: "Chair Column"},
        {field : "chairStatus",header: "Chair Status"}

    ]
    const dynamicColumns = columns.map((col)=>{
        return(
            <Column key={col.field} field={col.field} header={col.header}/> 
        )
    })
    return(
        <div style={{marginTop:"30px"}}>
            <DataTable value={loadedChairs} emptyMessage={emptyMessage} size="small">
               {dynamicColumns}
            </DataTable>
        </div>
    )
}

export default Chairs