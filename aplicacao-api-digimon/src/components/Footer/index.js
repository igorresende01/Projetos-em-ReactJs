import React from 'react';
import { Card } from 'react-bootstrap';
export default function Footer() {
    return (
        <>
            <br />
            <Card bg="dark" text="white" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Aprendendo ReactJS do Básico</Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        Utilização de alguns elementos para entender como funciona o ReactJs, utilizei: Nodejs, Npm, Yarn, Consumir web api.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

