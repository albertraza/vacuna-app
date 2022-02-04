import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

function CardLayout ( {
    title,
    subHeader,
    children,
    useFooter = false,
    returnUrl = '/',
    onSubmit
} ) {
    const navigate = useNavigate();

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

            {
                useFooter && (
                    <Card.Footer>
                        <button
                            className='btn btn-secondary'
                            style={ { marginRight: '5px' } }
                            onClick={ e => navigate( returnUrl ) }
                        >
                            Cancelar
                        </button>

                        {
                            onSubmit && (
                                <button
                                    className='btn btn-primary'
                                    onClick={ onSubmit }
                                    type="button"
                                >
                                    Guardar
                                </button>
                            )
                        }
                    </Card.Footer>
                )
            }

        </Card>
    );
}

CardLayout.propTypes = {
    title: PropTypes.string.isRequired,
    subHeader: PropTypes.element,
    useFooter: PropTypes.bool,
    returnUrl: PropTypes.string,
    onSubmit: PropTypes.func
}
export default CardLayout;
