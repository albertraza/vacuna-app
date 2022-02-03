export default function withData ( Component ) {
    return ( onEdit, onDelete, onView ) => {
        return ( data ) => {
            return (
                <Component
                    data={ data }
                    onEdit={ onEdit }
                    onDelete={ onDelete }
                    onView={ onView }
                />
            );
        }
    };
}
