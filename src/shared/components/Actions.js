export default function Actions ( { data, onEdit, onDelete, onView } ) {
    return (
        <>
            {
                onView && (
                    <button
                        className="btn btn-secondary"
                        style={ { marginRight: '3px' } }
                        onClick={ () => onView( data ) }
                    >
                        Ver
                    </button>
                )
            }
            {
                onEdit && (
                    <button
                        className="btn btn-warning"
                        style={ { marginRight: '3px' } }
                        onClick={ () => onEdit( data ) }
                    >
                        Editar
                    </button>
                )
            }
            {
                onDelete && (
                    <button
                        className="btn btn-danger"
                        onClick={ () => onDelete( data ) }
                    >
                        Eliminar
                    </button>
                )
            }
        </>
    )
}
