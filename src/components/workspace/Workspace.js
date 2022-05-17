import React from 'react'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'


const Workspace = (props) => {
    const emptyMessage = "No data Available please add some Chairs and Users"
    const workspace = props.workspaceDetails

    return(
        <>
            <DataTable value={workspace} emptyMessage={emptyMessage}>
                <Column field="chairNumber" header="Chair Number"/>
                <Column field="userName" header="User Name"/>
                <Column field="chairStatus" header="Status"/>
                <Column field="validity" header="Valid Upto"/>
                <Column field="actions" header="Actions"/>
            </DataTable>
        </>
    )
}

export default Workspace