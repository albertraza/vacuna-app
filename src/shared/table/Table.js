import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table ( { data, columns } ) {
    return <>
        <table className="table table-striped">
            <TableHeader columns={ columns } />
            <TableBody data={ data } columns={ columns } />
        </table>
    </>;
}

export default Table;
