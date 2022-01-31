import React from 'react';
import TableRow from './TableRow';

function TableBody ( { data, columns } ) {
    return <>
        <tbody>
            {
                data.map( ( user ) => {
                    return <TableRow
                        key={ Math.random() }
                        rowData={ user }
                        columns={ columns }
                    />;
                } )
            }

        </tbody>
    </>;
}

export default TableBody;
