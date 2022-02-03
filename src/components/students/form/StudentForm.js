import { useFormik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import useGetRequest from "../../../hooks/useGetRequest";
import CardLayout from "../../../shared/card/CardLayout";

export default function StudentForm () {
    const { data: locations } = useGetRequest( 'https://vacunaapp.azurewebsites.net/api/recintos' );
    const { data: genders } = useGetRequest( 'https://vacunaapp.azurewebsites.net/api/generos' );

    function handleSave () {
        console.log( 'guardar' );
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
        }
    } );

    const { values, handleChange } = form;

    return (
        <CardLayout
            title={ "Crear de estudiante" }
            useFooter
            onSubmit={ handleSave }
            returnUrl="/estudiantes"
        >
            <Form>

                <Row className="mb-2">
                    <Form.Group as={ Col } md="2">
                        <label className="form-label">Matricula</label>
                        <input
                            type="text"
                            className="form-control"
                            name="universityId"
                            placeholder="Matricula"
                            value={ values.universityId }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    <Form.Group as={ Col } md="5">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Nombre"
                            value={ values.name }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    <Form.Group as={ Col } md="5">
                        <label className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            placeholder="Apellido"
                            value={ values.lastName }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={ Col } md="4">
                        <label className="form-label">Cedula</label>
                        <input
                            type="text"
                            className="form-control"
                            name="identificationCard"
                            placeholder="Cedula"
                            value={ values.identificationCard }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    <Form.Group as={ Col } md="4">
                        <label className="form-label">Recinto</label>
                        <select
                            className="form-select"
                            name="locationId"
                            value={ values.locationId }
                            onChange={ handleChange }
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
                    </Form.Group>
                    <Form.Group as={ Col } md="4">
                        <label className="form-label">Genero</label>
                        <select
                            className="form-select"
                            name="sexId"
                            value={ values.sexId }
                            onChange={ handleChange }
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
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={ Col } md="8">
                        <label className="form-label">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            placeholder="Dirección"
                            value={ values.address }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                    <Form.Group as={ Col } md="4">
                        <label className="form-label">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Telefono"
                            value={ values.phone }
                            onChange={ handleChange }
                        />
                    </Form.Group>
                </Row>

            </Form>
        </CardLayout>
    )
}
