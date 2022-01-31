import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Table from "../../shared/table/Table";

export default function Students () {
    const [ students, setStudents ] = useState( [] );
    const columns = [
        { label: 'Matricula', prop: 'universityId' },
        { label: 'Cedula', prop: 'identificationCard' },
        { label: 'Telefono', prop: 'phone' },
        { label: 'Nombre', prop: 'name' },
        { label: 'Apellido', prop: 'lastName' }
    ];

    useEffect( () => {
        async function getStudents () {
            const response = await axios.get( `https://vacunaapp.azurewebsites.net/api/estudiantes`, {
                headers: {
                    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM2NjA5NjIsImV4cCI6MTY0MzY2NDU2MiwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0MzM5NDI5OCwiaWRwIjoibG9jYWwiLCJqdGkiOiI3NTQ5M0JBMDUwM0U2NzQ4QjJBOUQzMjc3NkU5NjBGNSIsInNpZCI6IkUyRjY5OTMwRDk5NzNCRDdGMEJDRDE3OTdCRjYwRjZCIiwiaWF0IjoxNjQzNjYwOTYyLCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.d1NZLsT3AUVYw0IkuOa-B3utyLVA9OBwU7ORXFkf9YCkq83a5lpNa4yknzd7eiwbJQriiPPpkryc9Fr190b4wvF_U6QrjKQPgFAAmnWLGvnNLdXPSXRxBKrIMac8SkgY3nQ3jdlypdOslVlf3BbymzhIBUIjlGAHIWEprdqUbHoa-zgTOHbiaKDt46pVBnOsOL6CTgDHFNjwPwN2f9kicaIuOTmgxhi7nJwuqpx8hO_bBoCgW_-C4X53_W3DgiUcjbyHjg9ZZJ9mZal2NLHc9EzzC5zj2OtsVNtBOj0Ih5QuLMWQeofxXU7Sdr5gYCaC-ucldllKjtYKV0UF4i9pBw',
                    'Access-Control-Allow-Origin': 'https://localhost:3000'
                }
            } )
            const { data } = response;
            setStudents( data );
        }

        getStudents();
    }, [] );

    return (
        <Card className="mt-5">
            <Card.Header>
                <div className="d-flex w-100">

                    <div className="d-block">
                        <h4>Lista de Estudiantes</h4>
                    </div>

                    <div style={ { marginLeft: 'auto' } }>
                        <button className="btn btn-primary">Añadir nuevo</button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Table
                    columns={ columns }
                    data={ students }
                />
            </Card.Body>
        </Card>
    )
}
