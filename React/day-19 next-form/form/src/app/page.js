"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Home() {
  return (
    <>
      <Container className="shadow-lg p-4 ">
        <h1 className="text-center  mt-4" > User Application Form </h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="email" placeholder="Enter contact" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <div className="d-flex gap-3 ">
              <Form.Check type="radio" name="gender" />  Male
              <Form.Check type="radio" name="gender" />  Female
            </div>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>DOB</Form.Label>
              <Form.Control type="date" />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Gender</Form.Label>
            <div className="d-flex gap-3 ">
              <Form.Check type="checkbox" />  10
              <Form.Check type="checkbox" />  12
              <Form.Check type="checkbox" />  UG
              <Form.Check type="checkbox" />  PG
            </div>

          </Form.Group>




          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

      </Container>
    </>
  );
}
