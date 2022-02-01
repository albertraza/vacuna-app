import axios from "axios";
import { useState, useEffect } from "react";
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
    const [ employees, setEmployees ] = useState( [] );

    const columns = [
        { label: 'Nombre', prop: 'name' },
        { label: 'Apellido', prop: 'lastName' },
        { label: 'Telefono', prop: 'phone' },
        { label: 'Puesto', prop: 'position' }
    ];

    useEffect( () => {
        async function getEmployees () {
            const response = await axios.get( `https://vacunaapp.azurewebsites.net/api/empleados`, {
                headers: {
                    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM3NDk1NjUsImV4cCI6MTY0Mzc1MzE2NSwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0Mzc0OTU2MiwiaWRwIjoibG9jYWwiLCJqdGkiOiI4RjM5QTUyQjg5OUFGNTg2MDJBMEIwMDNCQzg3RUI0MCIsInNpZCI6IkQzQ0JEOTNCMzJFQjQ1MjJGMDcxRDZCRjI5MDNCODdEIiwiaWF0IjoxNjQzNzQ5NTY1LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.aPISeqJ_zFvxX1nrNs-eyT1eL44dfII2pO3Y5SQXwbk7gyjLC7olYe3HoZ8YpbuHOclc85jFH6fUqNocwM8xZZVI59NyT2OyjQRQkHLNSxcwyRL-YMyEtverDrfT3cBhDCqehNiaEhVQmxC4YFEZg2fk7mK2XXNgiV8Z9ln3q75QpWvmrA8MsK-9H31NbSx9nlMrFW9rhVtS1eOXjMjgIvmYgJaBcKz7iQJbc7uAv840PrWIEupy-sJAwOzkQM4Zz-c9GO_OGsBxKaKSnMAPA4p1NPwVpYAegSr04VMKsg62wkzdm3qWHWC3hn5nUE7vlKaD6h0Hm8SWD0BYuiJjtA', // Aqui va el token
                }
            } )
            const { data } = response;
            setEmployees( data );
        }

        getEmployees();
    }, [] );

    return (
        <CardLayout
            title={ 'Listado de Empleados' }
            subHeader={
                <PrimaryButton text={ 'Añadir empleado' } />
            }
        >
            <Table
                columns={ columns }
                data={ employees }
            />
        </CardLayout>

    );
}
