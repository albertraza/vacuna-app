import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import UserContext from "../../contexts/UserContext";
import useGetRequest from "../../hooks/useGetRequest";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Table from "../../shared/table/Table";

export default function Students () {
    const userContext = useContext( UserContext );
    const { user: { name: userName } = { name: '' } } = userContext;

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
        },
        {
            label: 'Usuario', prop: 'userName'
        },
    ];

    const result = useGetRequest( `https://vacunaapp.azurewebsites.net/api/estudiantes` );
    const { data: students, error, isLoading } = result;

    return (
        <CardLayout
            title={ 'Listado de Estudiantes' }
            subHeader={
                <>
                    <PrimaryButton text="Añadir nuevo" style={ { marginRight: userName ? '10px' : undefined } } />
                    {
                        userName && <span> <b>Usuario: </b> { userName } </span>
                    }
                </>
            }
        >
            {
                error ? (
                    <Alert variant="danger">
                        Ocurrio un error al cargar los estudiantes.
                    </Alert>
                ) : (
                    <>
                        <Table
                            columns={ columns }
                            data={ students?.map( student => ( { userName, ...student } ) ) }
                        />
                        {
                            isLoading && (
                                <div className="d-flex w-100">
                                    <div style={ { margin: 'auto' } }>
                                        <Spinner animation="border" variant="success" />
                                    </div>
                                </div>
                            )
                        }
                    </>
                )
            }
        </CardLayout>
    )
}