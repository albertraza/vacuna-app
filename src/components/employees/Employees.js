import { Card } from "react-bootstrap";
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
    return (
        <CardLayout
            title={ 'Listado de Empleados' }
            subHeader={
                <PrimaryButton text={ 'Añadir empleado' } />
            }
        >
            <Table
                columns={ [] }
                data={ [] }
            />
        </CardLayout>

    );
}
