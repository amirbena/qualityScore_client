import React from 'react'
import { Card } from 'react-bootstrap';


const Pet = ({ pet }) => {
    const { image, name, primaryBreed, gender, age } = pet;
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{primaryBreed}</Card.Text>
                <Card.Text>{gender}</Card.Text>
                <Card.Text>{age}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Pet;