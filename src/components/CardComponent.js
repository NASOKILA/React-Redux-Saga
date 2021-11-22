import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.user.name}</Card.Title>
                <Card.Text>{props.user.company.name}</Card.Text>
                <Card.Text>{props.user.company.catchPhrase}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;