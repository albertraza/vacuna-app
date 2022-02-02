import axios from "axios";
import { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import useGetRequest from "../../hooks/useGetRequest";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
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
    const columns = [
        { label: 'Nombre', prop: 'name' },
        { label: 'Apellido', prop: 'lastName' },
        { label: 'Telefono', prop: 'phone' },
        { label: 'Puesto', prop: 'position' }
    ];

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
