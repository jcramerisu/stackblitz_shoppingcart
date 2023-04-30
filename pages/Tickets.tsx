import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {Ticket} from "../components/Ticket"
import liftTickets from '../data/liftTickets.json';

export function Tickets() {
  return (
    <>
      <h1> Tickets and Passes </h1>
      <Row md={2} xs={1} lg={3}>
        {liftTickets.map((ticket) => (
          <Col key={ticket.id}><Ticket {...ticket}/></Col>
        ))}
      </Row>
    </>
  );
}
