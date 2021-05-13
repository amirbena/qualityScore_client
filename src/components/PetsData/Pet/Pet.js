import React from 'react'
import { Card } from 'react-bootstrap';


const Pet = ({ pet }) => {
    const { image, name, primaryBreed, gender, age,type } = pet;

    const styles={
        card: {
            backgroundColor: '#B7E0F2',
            borderRadius: 55,
            padding: '20px'
          },
          cardImage: {
            objectFit: 'cover',
            borderRadius: 55
          }
    }
    return (
        <Card className="m-5 border-0 shadow" style={styles.card}>
            <Card.Img variant="top" src={image} style={styles.cardImage} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{type}</Card.Text>
                <Card.Text>Breed: {primaryBreed}</Card.Text>
                <Card.Text>{gender}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Pet;