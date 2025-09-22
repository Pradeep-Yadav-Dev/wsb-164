import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function page() {
    return (
        <>

            <Container fluid className='breadcrumbs_area'>
                <Container className='breadcrumb_content'>
                    <Row>
                        <Col lg={12}>
                            <h3>Reset Password</h3>
                            <ul className='p-0'>
                                <li><Link href="/">home</Link></li>
                                <li>&gt;</li>
                                <li>Reset Password</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container>
                <div className='tab-content dashboard_content'>

                    <div className="login">
                        <div className="account_form login_form_container">
                            <div className="account_login_form">
                                <form method="POST" acceptCharset="UTF-8" id="reset_password" className="bv-form" autoComplete="off" noValidate="noValidate">
                                    <div className="form-group has-feedback">
                                        <label>New Password</label>
                                        <input type="password" className="form-control" name="password" id="password" data-bv-field="password" />
                                    </div>

                                    <div className="form-group has-feedback">
                                        <label>Confirm Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" data-bv-field="confirmPassword" />
                                    </div>

                                    <br />
                                    <div className="login_submit">
                                        <button type="submit" className="common_btn text-uppercase" title="Update" id="passwordUpdate">Change Password</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
