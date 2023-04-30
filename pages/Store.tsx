import React from 'react';
import { Col, Row } from 'react-bootstrap';
import liftTickets from '../data/liftTickets.json';

export function Store() {
  return (
    <>
      <h1> Store </h1>
      <Row md={2} xs={1} lg={3}>
        {liftTickets.map((ticket) => (
          <Col>{JSON.stringify(ticket)}</Col>
        ))}
      </Row>
    </>
  );
}
