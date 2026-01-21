import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white py-5 border-top">
            <Container>
                <Row className="gy-4">
                    <Col lg={4}>
                        <h4 className="fw-bold">CONVERT<span style={{color: 'var(--accent-indigo)'}}>LY</span></h4>
                        <p className="text-muted mt-3">
                            We build conversion-focused websites that turn your visitors into loyal customers. Let's grow your business together.
                        </p>
                    </Col>
                    <Col lg={2} md={4}>
                        <h6 className="fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
                            <li><Link to="/services" className="text-decoration-none text-muted">Services</Link></li>
                            <li><Link to="/case-studies" className="text-decoration-none text-muted">Case Studies</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4}>
                        <h6 className="fw-bold mb-3">Support</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/contact" className="text-decoration-none text-muted">Contact Us</Link></li>
                            <li><span className="text-muted">Privacy Policy</span></li>
                            <li><span className="text-muted">Terms of Service</span></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4}>
                        <h6 className="fw-bold mb-3">Contact Info</h6>
                        <p className="text-muted mb-1">Email: hello@convertly.com</p>
                        <p className="text-muted">Phone: +1 (555) 000-1111</p>
                    </Col>
                </Row>
                <hr className="my-4" />
                <div className="text-center text-muted small">
                    &copy; {new Date().getFullYear()} CONVERTLY. All rights reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
