'use client'
import React, { useContext, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import "../globals.css";
import Link from 'next/link';
import { Econtext } from '../utility/WebsiteContext';
import axios from 'axios';
import Cookies from "js-cookie"

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export default function Page() {
  const { totalAmount } = useContext(Econtext)
  const [orderInfo, setOrderInfo] = useState({})
  
  // create-order
  const paymentForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert('Razorpay SDK failed to load!!')
      return
    }

    try {
      // 1️⃣ Create Razorpay order on backend
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}order/create-order`,
        { totalAmount },
        { headers: { "auth": `Bearer ${Cookies.get('monsta-website-164')}` } }
      )

      setOrderInfo(data.order)

      // 2️⃣ Convert formData to proper JS object
      const billingAddress = Object.fromEntries(formData.entries())

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_RKYn4vqfQCM98B",
        amount: data.order.amount,
        currency: "INR",
        name: "Monsta",
        description: "Monsta Test Transaction",
        image: "https://via.placeholder.com/150", 
        order_id: data.order.id,
        handler: async (response) => {
          // 3️⃣ Send Razorpay response + billingAddress to backend
          await axios.post(
            `${process.env.NEXT_PUBLIC_URL}order/verify-payment`,
            { 
              ...response, 
              billingAddress, 
              totalAmount 
            },
            { headers: { "auth": `Bearer ${Cookies.get('monsta-website-164')}` } }
          )
        },
        theme: { color: "#27cb15ff" }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } catch (err) {
      console.error(err)
      alert("Error in placing order")
    }
  }

  return (
    <>
      <Container fluid className='breadcrumbs_area'>
        <Container className='breadcrumb_content'>
          <Row>
            <Col lg={12}>
              <h3>Checkout</h3>
              <ul className='p-0'>
                <li><Link href="/">home</Link></li>
                <li>&gt;</li>
                <li>Checkout</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <section className='border-bottom border-1 pb-5'>
        <Container className='checkout_form'>
          <Row>
            <Form onSubmit={paymentForm} id='checkout_address' noValidate className="bv-form">
              <Row>
                <Col lg={6} md={6}>
                  <h3>Billing Details</h3>
                  <Row>
                    <Col lg={6} className='mb-20'>
                      <label>Name*</label>
                      <input type="text" className="form-control" name="name" />
                    </Col>
                    <Col lg={6} className='mb-20'>
                      <label>Mobile Number*</label>
                      <input type="text" className="form-control" name="number" />
                    </Col>
                    <Col lg={6} className='mb-20'>
                      <label>Billing Name*</label>
                      <input type="text" className="form-control" name="billingName" />
                    </Col>
                    <Col lg={6} className='mb-20'>
                      <label>Billing Email*</label>
                      <input type="text" className="form-control" name="billingEmail" />
                    </Col>
                    <Col xs={12} className='mb-20'>
                      <label>Billing Mobile Number*</label>
                      <input type="text" className="form-control" name="billingNumber" />
                    </Col>
                    <Col xs={12} className='mb-20'>
                      <label>Billing Address*</label>
                      <input type="text" className="form-control" name="billing_address" />
                    </Col>
                    <Col xs={12} className='mb-20'>
                      <label>Country*</label>
                      <select name='country' className='form-control'>
                        <option>Select Country</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="China">China</option>
                      </select>
                    </Col>
                    <Col lg={6} className='mb-20'>
                      <label>State*</label>
                      <input type="text" className="form-control" name="state" />
                    </Col>
                    <Col lg={6} className='mb-20'>
                      <label>City*</label>
                      <input type="text" className="form-control" name="city" />
                    </Col>
                    <Col xs={12} className='mb-20'>
                      <label>Order Notes</label>
                      <textarea name='notes' rows="5" placeholder="Notes about your order"></textarea>
                    </Col>
                  </Row>
                </Col>

                <Col lg={6} md={6}>
                  <h3>Your order</h3>
                  <div className="order_table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Cart Subtotal</th>
                          <td>Rs. {totalAmount}</td>
                        </tr>
                        <tr>
                          <th>Discount (-)</th>
                          <td><strong>Rs. 0</strong></td>
                        </tr>
                        <tr className="order_total">
                          <th>Order Total</th>
                          <td><strong>Rs. {totalAmount}</strong></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="order_button">
                    <button type="submit">Place Order</button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </section>
    </>
  )
}
