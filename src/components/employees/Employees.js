import axios from "axios";
import { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import withData from "../../hocs/withData";
import useGetRequest from "../../hooks/useGetRequest";
import useTableActions from "../../hooks/useTableActions";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Actions from "../../shared/components/Actions";
import Table from "../../shared/table/Table";

/*
Necesito un listado de empleados
El listado debe tener el nombre del empleado, el apellido, el telefono y su puesto.
La información viene del servicio web https://vacunaapp.azurewebsites.net/api/empleados

 *** TIPS ***
-para obtener la informacion deben usar axios.
-deben proveer las columnas que la tabla va a utilizar.
-recuerden usar el hook llamado useEffect.

*/
export default function Employees () {

    function handleEdit ( data ) {
        console.log( { edit: data } );
        // Accion de editar.
    }

    function handleDelete ( data ) {
        console.log( { delete: data } );
    }

    const tableColumns = [
        { label: 'Nombre', prop: 'name' },
        { label: 'Apellido', prop: 'lastName' },
        { label: 'Telefono', prop: 'phone' },
        { label: 'Puesto', prop: 'position' }
    ];

    const columns = useTableActions( {
        tableColumns,
        onEdit: handleEdit,
        onDelete: handleDelete
    } );

    const { data: employees, error, isLoading } = useGetRequest( `https://vacunaapp.azurewebsites.net/api/empleados` );

    return (
        <CardLayout
            title={ 'Listado de Empleados' }
            subHeader={
                <PrimaryButton text={ 'Añadir empleado' } />
            }
        >
            {
                error ? (
                    <Alert variant={ 'danger' }>
                        Ocurrio un error al obtener la información.
                    </Alert>
                ) : (
                    <>
                        <Table
                            columns={ columns }
                            data={ employees }
                        />
                        {
                            isLoading && (
                                <div className="d-flex w-100">
                                    <div style={ { margin: 'auto' } }>
                                        <Spinner animation="grow" />
                                    </div>
                                </div>
                            )
                        }
                    </>
                )
            }
        </CardLayout>

    );
}
