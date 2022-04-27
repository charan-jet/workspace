import React from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'


const Workspace = () => {
    const emptyMessage = "No data Available please add some Chairs and Users"
    
    return(
        <>
            <DataTable emptyMessage={emptyMessage}>
                <Column field="chairNumber" header="Chair Number"/>
                <Column field="fname" header="User Name"/>
                <Column field="chairStatus" header="Status"/>
                <Column field="validity" header="Valid Upto"/>
                <Column field="actions" header="Actions"/>
            </DataTable>
        </>
    )
}

export default Workspace