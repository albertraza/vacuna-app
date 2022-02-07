import { useFormik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import CardLayout from "../../../shared/card/CardLayout";
import { isInvalidInput } from "../../../shared/form/isValidInput";
import { locationValidationSchema } from "../helpers/locationValidationSchema";

export default function LocationForm () {

    function saveLocation ( value ) {
        console.log( value );
    }

    const form = useFormik( {
        initialValues: {
            name: '',
            phone: '',
            address: ''
        },
        validationSchema: locationValidationSchema,
        onSubmit: saveLocation
    } );

    const { values, handleChange, handleBlur, errors, handleSubmit } = form;

    return (
        <CardLayout
            title="Crear Recinto"
            useFooter
            onSubmit={ handleSubmit }
            returnUrl="/administracion/recintos"
        >
            <Form>

                <Row className="mb-2">
                    <Form.Group as={ Col } md="8">
                        <label className="form-label">Nombre
                            <span className="text-danger"> *</span>
                        </label>
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
                    <Form.Group as={ Col } md="4">
                        <label className="form-label">Telefono
                            <span className="text-danger"> *</span>
                        </label>
                        <input
                            type="text"
                            className={ `form-control ${ isInvalidInput( form, 'phone' ) ? 'is-invalid' : '' }` }
                            name="phone"
                            placeholder="(809) 999-9999"
                            value={ values.phone }
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                        />

                        {
                            isInvalidInput( form, 'phone' ) && <small className="text-danger "> { errors.phone } </small>
                        }
                    </Form.Group>
                </Row>
                <Row className="mt-2">
                    <Form.Group as={ Col } md="12">
                        <label className="form-label">Dirección
                            <span className="text-danger"> *</span>
                        </label>
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
                </Row>
            </Form>
        </CardLayout>
    );
}
