import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Table from "../../shared/table/Table";

export default function Students () {
    const [ students, setStudents ] = useState( [] );
    const columns = [
        {
            label: 'Matricula', prop: 'universityId'
        },
        { label: 'Cedula', prop: 'identificationCard' },
        { label: 'Telefono', prop: 'phone' },
        { label: 'Nombre', prop: 'name' },
        { label: 'Apellido', prop: 'lastName' },
        {
            label: 'Acciones', prop: 'id', render: ( { id } ) => {
                return (
                    <>
                        <button className="btn btn-secondary" style={ { marginRight: '3px' } }>Editar</button>
                        <button className="btn btn-danger">Eliminar</button>
                    </>
                )
            }
        }
    ];

    useEffect( () => {
        async function getStudents () {
            const response = await axios.get( `https://vacunaapp.azurewebsites.net/api/estudiantes`, {
                headers: {
                    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM3NDk1NjUsImV4cCI6MTY0Mzc1MzE2NSwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0Mzc0OTU2MiwiaWRwIjoibG9jYWwiLCJqdGkiOiI4RjM5QTUyQjg5OUFGNTg2MDJBMEIwMDNCQzg3RUI0MCIsInNpZCI6IkQzQ0JEOTNCMzJFQjQ1MjJGMDcxRDZCRjI5MDNCODdEIiwiaWF0IjoxNjQzNzQ5NTY1LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.aPISeqJ_zFvxX1nrNs-eyT1eL44dfII2pO3Y5SQXwbk7gyjLC7olYe3HoZ8YpbuHOclc85jFH6fUqNocwM8xZZVI59NyT2OyjQRQkHLNSxcwyRL-YMyEtverDrfT3cBhDCqehNiaEhVQmxC4YFEZg2fk7mK2XXNgiV8Z9ln3q75QpWvmrA8MsK-9H31NbSx9nlMrFW9rhVtS1eOXjMjgIvmYgJaBcKz7iQJbc7uAv840PrWIEupy-sJAwOzkQM4Zz-c9GO_OGsBxKaKSnMAPA4p1NPwVpYAegSr04VMKsg62wkzdm3qWHWC3hn5nUE7vlKaD6h0Hm8SWD0BYuiJjtA', // Aqui va el token
                }
            } )
            const { data } = response;
            setStudents( data );
        }

        getStudents();
    }, [] );

    return (
        <CardLayout
            title={ 'Listado de Estudiantes' }
            subHeader={
                <PrimaryButton text="Añadir nuevo" />
            }
        >
            <Table
                columns={ columns }
                data={ students }
            />
        </CardLayout>
    )
}
