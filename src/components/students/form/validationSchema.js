import * as Yup from 'yup';

const maxTemplate = 'Maximo de ${max} caracteres excedidos.';
export const validationSchema = Yup.object( {
    universityId: Yup.string().max( 8, maxTemplate ).required( 'La matricula es requerida.' ),
    name: Yup.string().max( 25, maxTemplate ).required( 'El nombre es requerido.' ),
    lastName: Yup.string().max( 50, maxTemplate ).required( 'El apellido es requerido.' ),
    identificationCard: Yup.string().max( 13, maxTemplate ).required( 'La cedula es requerida.' ),
    locationId: Yup.number().required( 'El recinto es requerido.' ),
    sexId: Yup.number().required( 'El genero es requerido.' ),
    address: Yup.string().max( 90, maxTemplate ),
    phone: Yup.string().max( 14, maxTemplate )
} );
