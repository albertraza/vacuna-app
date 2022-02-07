import * as Yup from 'yup';

export const locationValidationSchema = Yup.object( {
    name: Yup.string().required( "El nombre es requerido." ),
    phone: Yup.string().required( "El telefono es requerido." ),
    address: Yup.string().required( "La dirección es requerida." )
} );
