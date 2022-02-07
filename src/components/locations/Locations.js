import { useNavigate } from "react-router";
import useGetRequest from "../../hooks/useGetRequest";
import useTableActions from "../../hooks/useTableActions";
import PrimaryButton from "../../shared/buttons/PrimaryButton";
import CardLayout from "../../shared/card/CardLayout";
import Table from "../../shared/table/Table";
import { locationTableColumns } from "./helpers/locationTableColumns";

export default function Locations () {
    const navigate = useNavigate();
    const { data } = useGetRequest( `https://vacunaapp.azurewebsites.net/api/recintos` );

    const columns = useTableActions( {
        tableColumns: locationTableColumns,
        onEdit: ( data ) => { },
        onDelete: ( data ) => { }
    } );

    return (
        <CardLayout
            title="Listado de Recintos"
            subHeader={ <>
                <PrimaryButton text={ "Añadir nuevo" } onClick={ e => navigate( "nuevo" ) } />
            </> }
        >
            <Table
                columns={ columns }
                data={ data }
            />
        </CardLayout>
    )
}
