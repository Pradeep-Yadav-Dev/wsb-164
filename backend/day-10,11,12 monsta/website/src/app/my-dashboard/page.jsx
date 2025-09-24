'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [selectedTitle, setSelectedTitle] = useState("Mr.");
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);

    // console.log(orders)

    // Fetch orders when Orders tab is active
    useEffect(() => {
        if (activeTab === 'orders') {
            const fetchOrders = async () => {
                try {
                    const { data } = await axios.get(
                        `${process.env.NEXT_PUBLIC_URL}order/get-orders`,
                        { headers: { "auth": `Bearer ${Cookies.get('monsta-website-164')}` } }
                    );
                    // console.log(data)
                    setOrders(data.orders.history || []);
                    setLoadingOrders(false);
                } catch (err) {
                    console.error(err);
                    setLoadingOrders(false);
                }
            };
            fetchOrders();
        }
    }, [activeTab]);

    return (
        <>
            <Container fluid className='breadcrumbs_area'>
                <Container className='breadcrumb_content'>
                    <Row>
                        <Col lg={12}>
                            <h3>My Dashboard</h3>
                            <ul className='p-0'>
                                <li><Link href="/">home</Link></li>
                                <li>&gt;</li>
                                <li>My Dashboard</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='py-5 border-bottom'>
                <Container>
                    <Row>
                        {/* Sidebar */}
                        <Col lg={3} className='dashboard_tab_button'>
                            <ul className='nav flex-column dashboard-list'>
                                <li>
                                    <a onClick={() => setActiveTab('dashboard')} className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}>
                                        My Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => setActiveTab('orders')} className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}>
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => setActiveTab('address')} className={`nav-link ${activeTab === 'address' ? 'active' : ''}`}>
                                        Address
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => setActiveTab('profile')} className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}>
                                        My Profile
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => setActiveTab('password')} className={`nav-link ${activeTab === 'password' ? 'active' : ''}`}>
                                        Change Password
                                    </a>
                                </li>
                                <li>
                                    <Link href="/" className='nav-link'>Logout</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* Main Content */}
                        <Col lg={9}>
                            {/* Dashboard Content */}
                            {activeTab === 'dashboard' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>My Dashboard</h3>
                                    <p>From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                </div>
                            )}

                            {/* Orders Content */}
                            {activeTab === 'orders' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>Orders</h3>
                                    <div className='table-responsive order'>
                                        {loadingOrders ? (
                                            <p>Loading orders...</p>
                                        ) : orders.length === 0 ? (
                                            <p>No orders found</p>
                                        ) : (
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orders?.map((order, index) => {

                                                        return (
                                                            <tr key={order._id}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    {order?.billingAddress?.date
                                                                        ? new Date(order.billingAddress.date).toLocaleDateString("en-IN", {
                                                                            day: "2-digit",
                                                                            month: "2-digit",
                                                                            year: "numeric",
                                                                        })
                                                                        : "-"}
                                                                </td>



                                                                <td>
                                                                    <span >
                                                                        {order?.paymentStatus}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    Rs. {order?.totalAmount}
                                                                </td>
                                                                <td>
                                                                    <Link href={`/order-details/${order._id}`} className="view">view</Link>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Address Content */}
                            {activeTab === 'address' && (
                                <div className='tab-content dashboard_content'>
                                    <p>The following addresses will be used on the checkout page by default.</p>
                                    {/* Address forms can go here */}
                                </div>
                            )}

                            {/* Profile Content */}
                            {activeTab === 'profile' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>My Profile</h3>
                                    {/* Profile form */}
                                </div>
                            )}

                            {/* Change Password Content */}
                            {activeTab === 'password' && (
                                <div className='tab-content dashboard_content'>
                                    <h3>Change Password</h3>
                                    {/* Password form */}
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
