import { Spinner } from "react-bootstrap";

export default function Loading () {
    return (
        <div className="d-flex w-100">
            <div style={ { margin: 'auto' } }>
                <Spinner animation="border" variant="success" />
            </div>
        </div>
    );
}
