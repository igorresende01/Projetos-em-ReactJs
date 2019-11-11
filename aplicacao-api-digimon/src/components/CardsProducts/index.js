import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap'
class CardsProducts extends Component {

    state = {
        cards: [
            {
                imagem: 'http://placelogistics.com/wp-content/uploads/2019/06/pecas-de-reposicao-tecnologia-logistica-importacao-e-exportacao.jpg',
                title: 'Card 1',
                text: 'Texto do card 1 para que eu possa ver a diferença',
            },
            {
                imagem: 'https://img.freepik.com/fotos-gratis/neon-sinal-barzinhos-imagem-coquetel_23-2148184280.jpg?size=338&ext=jpg',
                title: 'Card 2',
                text: 'Texto do card 2 para que eu possa ver a diferença',
            },
            {
                imagem: 'https://static.netshoes.com.br/produtos/trofeu-vitoria-501587-taca-13-cm/11/C96-0062-311/C96-0062-311_zoom1.jpg',
                title: 'Card 3',
                text: 'Texto do card 3 para que eu possa ver a diferença',
            }
        ]
    }
    render() {
        return (
            <>


                {this.state.cards.map(card =>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card.imagem} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                                <Button variant="primary">Ver Produto</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </>
        )
    }
}

export default CardsProducts;