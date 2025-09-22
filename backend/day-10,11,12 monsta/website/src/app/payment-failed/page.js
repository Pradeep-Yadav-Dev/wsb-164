import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function page() {
  return (
    <>
    <Container fluid className='border-bottom'>
        <Row className='text-center py-5'>
        <h2 className='text-danger'>⚠️ Payment Failed</h2>
        <p>Oops! Something went wrong with your payment. Please try again or use a different payment method.</p>
        <Link href="/" className='common_btn text-uppercase'>Back to Home</Link>
        </Row>
    </Container>
    </>
  )
}
