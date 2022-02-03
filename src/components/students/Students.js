import { useContext } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import UserContext from "../../contexts/UserContext";
import withData from "../../hocs/withData";
import useGetRequest from "../../hooks/useGetRequest";
import useTableActions from "../../hooks/useTableActions";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Actions from "../../shared/components/Actions";
import Table from "../../shared/table/Table";

export default function Students () {
    const userContext = useContext( UserContext );
    const { user: { name: userName } = { name: '' } } = userContext;
    const navigate = useNavigate();

    function handleEdit ( data ) {
        console.log( { edit: data } );
        // Accion de editar.
    }

    function handleDelete ( data ) {
        console.log( { delete: data } );
    }

    const tableColumns = [
        {
            label: 'Matricula', prop: 'universityId'
        },
        { label: 'Cedula', prop: 'identificationCard' },
        { label: 'Telefono', prop: 'phone' },
        { label: 'Nombre', prop: 'name' },
        { label: 'Apellido', prop: 'lastName' },
    ];

    const columns = useTableActions( {
        tableColumns,
        onEdit: handleEdit,
        onDelete: handleDelete
    } );

    const result = useGetRequest( `https://vacunaapp.azurewebsites.net/api/estudiantes` );
    const { data: students, error, isLoading } = result;

    return (
        <CardLayout
            title={ 'Listado de Estudiantes' }
            subHeader={
                <>

                    <PrimaryButton
                        text="Añadir nuevo"
                        style={ { marginRight: userName ? '10px' : undefined } }
                        onClick={ e => navigate( '/estudiantes/nuevo' ) }
                    />

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
