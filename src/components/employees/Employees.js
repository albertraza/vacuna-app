import { Card } from "react-bootstrap";
import Table from "../../shared/table/Table";

export default function Employees () {
    return ( <Card className="mt-5">
        <Card.Header>
            <div className="d-flex w-100">

                <div className="d-block">
                    <h4>Lista de Empleados</h4>
                </div>

                <div style={ { marginLeft: 'auto' } }>
                    <button className="btn btn-primary">Añadir nuevo</button>
                </div>
            </div>
        </Card.Header>
        <Card.Body>
            <Table
                columns={ [] }
                data={ [] }
            />
        </Card.Body>
    </Card> );
}
