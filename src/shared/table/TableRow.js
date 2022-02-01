import React from 'react';

function TableRow ( { rowData, columns } ) {
    return <>
        <tr>
            {
                columns.map( columnData => ( <td key={ Math.random() } > { columnData.render ? columnData.render( rowData ) : rowData[ columnData.prop ] } </td> ) )
            }
        </tr>
    </>;
}

export default TableRow;
