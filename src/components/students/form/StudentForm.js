import { useFormik } from "formik";
import { useEffect } from "react";
import { useReducer } from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import useGetRequest from "../../../hooks/useGetRequest";
import CardLayout from "../../../shared/card/CardLayout";
import { isInvalidInput } from "../../../shared/form/isValidInput";
import { formInitialState, formReducer, stopLoading } from "../reducers/formReducer";
import { validationSchema } from "./validationSchema";

export default function StudentForm () {
    const { data: locations } = useGetRequest( 'https://vacunaapp.azurewebsites.net/api/recintos' );
    const { data: genders } = useGetRequest( 'https://vacunaapp.azurewebsites.net/api/generos' );
    const [ formState, dispatch ] = useReducer( formReducer, formInitialState );

    function handleSave ( values ) {
        console.log( { values } );
    }

    const form = useFormik( {
        initialValues: {
            universityId: '',
            name: '',
            lastName: '',
            identificationCard: '',
            locationId: '',
            sexId: '',
            address: '',
            phone: ''
        },
        validationSchema: validationSchema,
        onSubmit: handleSave
    } );

    const { values, errors, handleBlur, handleSubmit, handleChange } = form;

    useEffect( () => {
        dispatch( stopLoading() );
    }, [] );

    return (
        <CardLayout
            title={ "Crear de estudiante" }
            useFooter
            onSubmit={ handleSubmit }
            returnUrl="/estudiantes"
        >
            {
                formState.isLoadingData ? (
                    <div className="d-flex w-100">
                        <div style={ { margin: 'auto' } }>
                            <Spinner animation="border" variant="success" />
                        </div>
                    </div>
                ) : (
                    <Form>

                        <Row className="mb-2">
                            <Form.Group as={ Col } md="2">
                                <label className="form-label">Matricula</label>
                                <input
                                    type="text"
                                    className={ `form-control ${ isInvalidInput( form, 'universityId' ) ? 'is-invalid' : '' }` }
                                    name="universityId"
                                    placeholder="Matricula"
                                    value={ values.universityId }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />

                                {
                                    isInvalidInput( form, 'universityId' ) && <small className="text-danger "> { errors.universityId } </small>
                                }

                            </Form.Group>
                            <Form.Group as={ Col } md="5">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className={ `form-control ${ isInvalidInput( form, 'name' ) ? 'is-invalid' : '' }` }
                                    name="name"
                                    placeholder="Nombre"
                                    value={ values.name }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />

                                {
                                    isInvalidInput( form, 'name' ) && <small className="text-danger "> { errors.name } </small>
                                }
                            </Form.Group>
                            <Form.Group as={ Col } md="5">
                                <label className="form-label">Apellido</label>
                                <input
                                    type="text"
                                    className={ `form-control ${ isInvalidInput( form, 'lastName' ) ? 'is-invalid' : '' }` }
                                    name="lastName"
                                    placeholder="Apellido"
                                    value={ values.lastName }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />

                                {
                                    isInvalidInput( form, 'lastName' ) && <small className="text-danger "> { errors.lastName } </small>
                                }

                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group as={ Col } md="4">
                                <label className="form-label">Cedula</label>
                                <input
                                    type="text"
                                    className={ `form-control ${ isInvalidInput( form, 'identificationCard' ) ? 'is-invalid' : '' }` }
                                    name="identificationCard"
                                    placeholder="Cedula"
                                    value={ values.identificationCard }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />

                                {
                                    isInvalidInput( form, 'identificationCard' ) && <small className="text-danger "> { errors.identificationCard } </small>
                                }

                            </Form.Group>
                            <Form.Group as={ Col } md="4">
                                <label className="form-label">Recinto</label>
                                <select
                                    className={ `form-select ${ isInvalidInput( form, 'locationId' ) ? 'is-invalid' : '' }` }
                                    name="locationId"
                                    value={ values.locationId }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    <option value="">Seleccione un recinto</option>

                                    {
                                        locations?.map( location =>
                                        (
                                            <option
                                                key={ location.id + location.name }
                                                value={ location.id }
                                            >
                                                { location.name }
                                            </option>
                                        ) )
                                    }

                                </select>

                                {
                                    isInvalidInput( form, 'locationId' ) && <small className="text-danger "> { errors.locationId } </small>
                                }

                            </Form.Group>
                            <Form.Group as={ Col } md="4">
                                <label className="form-label">Genero</label>
                                <select
                                    className={ `form-select ${ isInvalidInput( form, 'sexId' ) ? 'is-invalid' : '' }` }
                                    name="sexId"
                                    value={ values.sexId }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                >
                                    <option value="">Seleccione un genero</option>

                                    {
                                        genders?.map( gender =>
                                        (
                                            <option
                                                key={ gender.id + gender.name }
                                                value={ gender.id }
                                            >
                                                { gender.name }
                                            </option>
                                        ) )
                                    }
                                </select>

                                {
                                    isInvalidInput( form, 'sexId' ) && <small className="text-danger "> { errors.sexId } </small>
                                }

                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group as={ Col } md="8">
                                <label className="form-label">Dirección</label>
                                <input
                                    type="text"
                                    className={ `form-control ${ isInvalidInput( form, 'address' ) ? 'is-invalid' : '' }` }
                                    name="address"
                                    placeholder="Dirección"
                                    value={ values.address }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />

                                {
                                    isInvalidInput( form, 'address' ) && <small className="text-danger "> { errors.address } </small>
                                }
                            </Form.Group>
                            <Form.Group as={ Col } md="4">
                                <label className="form-label">Telefono</label>
                                <input
                                    type="text"
                                    className={ `form-control ${ isInvalidInput( form, 'phone' ) ? 'is-invalid' : '' }` }
                                    name="phone"
                                    placeholder="Telefono"
                                    value={ values.phone }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                />

                                {
                                    isInvalidInput( form, 'phone' ) && <small className="text-danger "> { errors.phone } </small>
                                }

                            </Form.Group>
                        </Row>

                    </Form>
                )
            }
        </CardLayout>
    )
}
