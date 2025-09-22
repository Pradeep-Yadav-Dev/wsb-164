import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function page() {
  return (
    <>



    <Container fluid className='border-bottom'>
        <Row className='text-center py-5'>
        <h2>Payment Successful ✅</h2>
        <p>Thank you for your purchase! A confirmation has been sent to your email.</p>
        <Link href="/" className='common_btn text-uppercase'>Back to Home</Link>
        </Row>
    </Container>
    </>
  )
}
