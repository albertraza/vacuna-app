import React from 'react';

// label,
// prop
// key

function TableHeader ( { columns } ) {
    return <>
        <thead>
            <tr>
                {
                    columns.map( colData => ( <th key={ Math.random() } scope="col">{ colData.label }</th> ) )
                }
            </tr>
        </thead>
    </>;
}

export default TableHeader;
