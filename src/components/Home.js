import React from 'react';
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div div style={{ marginTop: "2rem" }}>
        <Container>
        <Form className="form-style-8" >
        <Row form>
        <Col md={6}>
            <FormGroup>
              <Label >Player 1</Label>
              <Input type="text" name="name" id="name"  />
            </FormGroup>
        </Col>
        <Col md={6}>
            <FormGroup>
              <Label >Player 2</Label>
              <Input type="text" name="name" id="name"  />
            </FormGroup>
          </Col>
        </Row>
        <Button href="/game">Jouer </Button>
      </Form>
      </Container>
      </div>
    );
  }
}