import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import useTableActions from "../../hooks/useTableActions";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Table from "../../shared/table/Table";
import { studentTableColumns } from "./helpers/studentTableColumns";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { clearState, deleteStudent, getStudents } from "./reducers/studentsReducer";
import Swal from 'sweetalert2';

export default function Students () {
    const { data, isLoading } = useSelector( state => state.students );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const columns = useTableActions( {
        tableColumns: studentTableColumns,
        onEdit: ( { id } ) => {
            navigate( `${ id }` );
        },
        onDelete: ( { id } ) => {
            Swal.fire( {
                title: '¿Esta seguro?',
                icon: 'question',
                text: 'La informacíon será eliminada correctamente, ¿esta seguro?',
                confirmButtonText: 'Si',
                showCancelButton: true,
                allowEscapeKey: false,
                allowOutsideClick: false
            } ).then( result => {
                if ( result.isConfirmed ) {
                    dispatch( deleteStudent( id ) );
                }
            } );
        }
    } );

    useEffect( () => {
        dispatch( getStudents() );

        return () => {
            dispatch( clearState() );
        }
    }, [ dispatch ] );

    return (
        <CardLayout
            title={ 'Listado de Estudiantes' }
            subHeader={
                <>

                    <PrimaryButton
                        text="Añadir nuevo"
                        onClick={ e => navigate( '/estudiantes/nuevo' ) }
                    />
                </>
            }
        >

            <>
                <Table
                    columns={ columns }
                    data={ data }
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
        </CardLayout>
    )
}
