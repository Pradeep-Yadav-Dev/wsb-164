'use client'
import React, { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import "../globals.css";
import Link from 'next/link';
import { Econtext } from '../utility/WebsiteContext';
import axios from 'axios';
import Cookies from "js-cookie"


function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}




export default function page() {


    let { totalAmount } = useContext(Econtext)
    let [orderInfo, setOrderInfo] = useState({})
    console.log(orderInfo)

    // create-order

    let paymentForm = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append("totalAmount", totalAmount)

        const res = loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razropay failed to load!!')
            return
        }
        else {
            axios.post(`${process.env.NEXT_PUBLIC_URL}order/create-order`,
                { totalAmount },
                { headers: { "auth": `Bearer ${Cookies.get('monsta-website-164')}` } },
            )
                .then((ress) => {
                    setOrderInfo(ress.data.order)

                    const options = {
                        "key": "rzp_test_RKYn4vqfQCM98B", // Enter the Key ID generated from the Dashboard
                        "amount": orderInfo.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        "currency": "INR",
                        "name": "Monsta",
                        "description": "Monsta Test Transaction",
                        "image": "https://example.com/your_logo",
                        "order_id": orderInfo.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        "callback_url": "http://localhost:1769/verify",
                        "notes": {
                            "address": "Razorpay Corporate Office"
                        },
                        "theme": {
                            "color": "#27cb15ff"
                        }
                    };
                    const paymentObject = new Razorpay(options);
                    paymentObject.open();

                    alert("Order Placed Successfully")
                })
                .catch((err) => {
                    console.log(err)
                    alert("Error in placing order")
                })
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
                        <Form onSubmit={paymentForm} id='checkout_address' noValidate='novalidate' className="bv-form">

                            <Row>
                                <Col lg={6} md={6}>
                                    <h3>Billing Details</h3>
                                    <Row>
                                        <Col lg={6} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Name*</label>
                                                <input type="text" className="form-control" id="name" name="name" defaultValue="" data-bv-field="name" /></div>
                                        </Col>

                                        <Col lg={6} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Mobile Number*</label>
                                                <input type="text" className="form-control numeric" id="mobile_number" maxLength="15" name="number" defaultValue="" data-bv-field="mobile_number" />
                                            </div>
                                        </Col>

                                        <Col lg={6} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Billing Name*</label>
                                                <input type="text" className="form-control" id="billing_name" name="billingName" defaultValue="" data-bv-field="billing_name" />
                                            </div>
                                        </Col>



                                        <Col lg={6} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Billing Email*</label>
                                                <input type="text" className="form-control" id="billing_email" name="billingEmail" defaultValue="" data-bv-field="billing_email" />
                                            </div>
                                        </Col>

                                        <Col xs={12} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Billing Mobile Number*</label>
                                                <input type="text" className="form-control numeric" id="billing_mobile" maxLength="15" name="billingNumber" defaultValue="" data-bv-field="billing_mobile" />
                                            </div>
                                        </Col>

                                        <Col xs={12} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Billing Address*</label>
                                                <input type="text" className="form-control" name="billing_address" id="billingAddress" defaultValue="" data-bv-field="billing_address" />
                                            </div>
                                        </Col>

                                        <Col xs={12} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="name">Country*</label>

                                                <select name='country' className='nice-select niceselect_option'>
                                                    <option>Select Country</option>
                                                    <option value={"India"} >India</option>
                                                    <option value={"Pakistan"} >Pakistan</option>
                                                    <option value={"China"} >China</option>
                                                </select>
                                            </div>
                                        </Col>

                                        <Col lg={6} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="billing_state">State*</label>
                                                <input type="text" className="form-control" name="state" id="billing_state" defaultValue="" data-bv-field="billing_state" />
                                            </div>
                                        </Col>

                                        <Col lg={6} className='mb-20'>
                                            <div className="form-group has-feedback">
                                                <label htmlFor="billing_city">City*</label>
                                                <input type="text" className="form-control" name="city" id="billing_city" defaultValue="" data-bv-field="billing_city" />
                                            </div>
                                        </Col>



                                        <Col xs={12} className='mb-20'>
                                            <div className="order-notes">
                                                <label htmlFor="order_note">Order Notes</label>
                                                <textarea id="order_note" rows="5" name='notes' placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>
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
                                                    <td>Rs. {totalAmount} </td>
                                                </tr>
                                                <tr>
                                                    <th>Discount (-)</th>
                                                    <td><strong>Rs. 0</strong></td>
                                                </tr>
                                                <tr className="order_total">
                                                    <th>Order Total</th>
                                                    <td><strong>Rs. {totalAmount} </strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="order_button">
                                        <button id="placeOrder">Placed Order</button>
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
