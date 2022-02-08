import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router";
import useTableActions from "../../hooks/useTableActions";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Table from "../../shared/table/Table";
import { employeeTableColumns } from "./helpers/employeeTableColumns";
import { getEmployees, stopLoading } from "./reducers/employeesReducer";

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
    const { dataList, isLoading } = useSelector( state => state.employees, shallowEqual );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const columns = useTableActions( {
        tableColumns: employeeTableColumns,
        onEdit: () => { },
        onDelete: () => { }
    } );

    useEffect( () => {
        dispatch( getEmployees() );
    }, [] )

    return (
        <CardLayout
            title={ 'Listado de Empleados' }
            subHeader={
                <PrimaryButton text={ 'Añadir empleado' } onClick={ e => navigate( '/empleados/nuevo' ) } />
            }
        >
            <Table
                columns={ columns }
                data={ dataList }
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

        </CardLayout>

    );
}
