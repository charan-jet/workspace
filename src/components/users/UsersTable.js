import React  from "react"
import {DataTable} from "primereact/datatable"
import {Column} from "primereact/column"
import {Button} from "primereact/button"
/* import {Dialog} from "primereact/dialog"
import InputFields from "./InputFields"
 */
const UsersTable = (props) =>{
    const emptyMessage = "No Users Available, Please add new users"
    const userDetails = props.users
    
   /*  const columns = [
        {field : "fname",header:"First Name"},
        {field : "fatherName",header:"Father Name"},    
        {field : "dob",header:"Date Of Birth"},
        {field : "gender",header:"Gender"},
        {field : "mobile",header:"Mobile"},
        {field : "email",header: "Email Id"},
    ]    */
    /* const dynamicColumns = columns.map((col)=>{
        return(
            <Column key={col.field} field={col.field} header={col.header}/>
        )
    }) */

    const editUser = (rowData) => {
        props.getUser(rowData)
        props.showModal()
    }

    const removeUser = (rowData) => {
        props.deleteUser(rowData)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-text mr-2 p-button-warning p-button-rounded p-button-sm" onClick={(e)=>editUser(rowData)}/>
                <Button icon="pi pi-trash" className="p-button-text p-button-danger p-button-rounded p-button-sm" onClick={(e)=>removeUser(rowData)}/>
            </React.Fragment>
        );
    }
   
    return( 
       <>       
        <div style={{marginTop:"30px"}}>
            <DataTable value={userDetails} emptyMessage={emptyMessage} size="small">
                <Column key="fname" field="fname" header="First Name"/>
                <Column key="fatherName" field="fatherName" header="Father Name"/>
                <Column key="dob" field="dob" header="Date Of Birth"/>
                <Column key="gender" field="gender" header="Gender"/>
                <Column key="mobile" field="mobile" header="Mobile"/>
                <Column key="email" field="email" header="Email Id"/>
                <Column key="aadhar" field="aadhar" header="Aadhar"/>
                <Column body={actionBodyTemplate} exportable={false}/>
            </DataTable>
        </div>
       </>
    )
}

export default UsersTable