import React from "react"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"

const UsersTable = (props) =>{
    const emptyMessage = "No Users Available, Please add new users"
    const userDetails = props.users
    
    const columns = [
        {field : "fname",header:"First Name"},
        {field : "lname",header:"Last Name"},
        {field : "email",header: "Email Id"}
    ]
    const dynamicColumns = columns.map((col)=>{
        return(
            <Column key={col.field} field={col.field} header={col.header}/> 
        )
    })
    return(
        <div style={{marginTop:"30px"}}>
            <DataTable value={userDetails} emptyMessage={emptyMessage} size="small">
               {dynamicColumns}
            </DataTable>
        </div>
    )
}

export default UsersTable