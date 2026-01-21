import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        business_type: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            await axios.post('http://localhost:5000/api/leads', formData);
            setStatus({ type: 'success', msg: 'Thank you! We have received your request and will contact you within 24 hours.' });
            setFormData({ name: '', email: '', business_type: '', message: '' });
        } catch (err) {
            setStatus({ type: 'danger', msg: 'Something went wrong. Please try again or email us directly.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-page py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="premium-card p-4 p-md-5 border-0 shadow-lg" style={{marginTop: '40px'}}>
                            <Row className="g-5">
                                <Col lg={5} className="bg-dark text-white p-4 p-md-5 rounded-4">
                                    <h2 className="fw-bold mb-4">Let's Build Something That Works</h2>
                                    <p className="opacity-75 mb-5">Fill out the form and our strategist will review your business and prepare a custom growth plan for you.</p>
                                    
                                    <div className="d-flex gap-3 mb-4">
                                        <Mail className="text-primary" />
                                        <div>
                                            <div className="small fw-bold opacity-50">Email Us</div>
                                            <div className="fw-medium">hello@convertly.com</div>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3 mb-4">
                                        <Phone className="text-primary" />
                                        <div>
                                            <div className="small fw-bold opacity-50">Call Us</div>
                                            <div className="fw-medium">+1 (555) 123-4567</div>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <MapPin className="text-primary" />
                                        <div>
                                            <div className="small fw-bold opacity-50">Office</div>
                                            <div className="fw-medium">Downtown Tech District, NY</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={7}>
                                    {status.msg && <Alert variant={status.type} className="mb-4">{status.msg}</Alert>}
                                    <Form onSubmit={handleSubmit} className="lead-form">
                                        <Row className="g-3">
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-muted uppercase">Full Name</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        required 
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                        placeholder="John Doe" 
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-muted uppercase">Business Email</Form.Label>
                                                    <Form.Control 
                                                        type="email" 
                                                        required 
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                        placeholder="john@company.com" 
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-muted uppercase">Business Type</Form.Label>
                                                    <Form.Select 
                                                        required 
                                                        value={formData.business_type}
                                                        onChange={(e) => setFormData({...formData, business_type: e.target.value})}
                                                    >
                                                        <option value="">Select industry</option>
                                                        <option>SaaS / Tech</option>
                                                        <option>E-commerce</option>
                                                        <option>Professional Services</option>
                                                        <option>Real Estate</option>
                                                        <option>Other</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group>
                                                    <Form.Label className="small fw-bold text-muted uppercase">Message</Form.Label>
                                                    <Form.Control 
                                                        as="textarea" 
                                                        rows={4} 
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                        placeholder="Tell us about your goals..." 
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Button 
                                                    type="submit" 
                                                    className="btn-premium w-100 py-3 mt-2 d-flex align-items-center justify-content-center gap-2"
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Submitting...' : <><Send size={18} /> Get Free Consultation</>}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
