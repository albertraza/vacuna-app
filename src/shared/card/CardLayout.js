import { Card } from 'react-bootstrap';

function CardLayout ( { title, subHeader, children } ) {
    return (
        <Card className="mt-5">
            <Card.Header>
                <div className="d-flex w-100">

                    <div className="d-block">
                        <h4> { title } </h4>
                    </div>

                    <div style={ { marginLeft: 'auto' } }>
                        { subHeader }
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                { children }
            </Card.Body>
        </Card>
    );
}

export default CardLayout;
