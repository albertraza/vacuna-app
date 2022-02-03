import withData from "../hocs/withData";
import Actions from "../shared/components/Actions";

export default function useTableActions ( {
    tableColumns,
    onEdit,
    onDelete,
    onView
} ) {
    const columnArr = [
        ...tableColumns,
        {
            label: 'Acciones', prop: 'id', render: withData( Actions )( onEdit, onDelete, onView )
        }
    ];
    return columnArr;
}
