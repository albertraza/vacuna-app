import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
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
                    authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDM3NDU1NDYsImV4cCI6MTY0Mzc0OTE0NiwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0MzcyNzcxMywiaWRwIjoibG9jYWwiLCJqdGkiOiI0NDk0QjRBMTcxQ0UxRUQ2Mzk5QkU3QkFEQjM3NzMzMCIsInNpZCI6IkY1Qzc1OTQzNDNGNTNFRkQzREI3QjA5NzQxNDU1NUE4IiwiaWF0IjoxNjQzNzQ1NTQ2LCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.313W8ql4XlQ-1-g-ERIL-lVTae9RohM5Wu47PFit6Bei_0YbiLao5zHchkYfp6-_iATqh6bwIUm-gQBoSAHz4ap5qFyGwNGxZZtbbit3vAZiH7KoqK2_m0GSR6CEurUKXWr9PRcyLL2-lHjI8ueWrwGrpEdW4QEsJ9t9DcCbKB89tzuEDokY8b_8wMM9CPxCivzxzBKNU5D_QuhT2r48QIOjAiTMuhX4o5H37k_SAFZa_C5vHn6Z4Wnsy21BqLLYP3C2nOEWVMC6tgxjSv-kquGe25gtnucpb6fdcasaX7a67uXLhACngl8uwt9UpFWJCFCtBgEp_r3HnfU7NNy8wQ', // Aqui va el token
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
