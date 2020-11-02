import React from 'react';
import Hero from './Hero';
import Login from './Login';
import { Container, Row, Col } from 'react-bootstrap';

export default () => (
  <div className='app-container'>
    <Container>
      <Row>
        <Col lg={7}>
          <Hero />
        </Col>
        <Col lg={5}>
          <Login />
        </Col>
      </Row>
    </Container>
  </div>
);
