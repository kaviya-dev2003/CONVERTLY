import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Smartphone, Search } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="section-padding overflow-hidden">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                            <h1 className="display-4 fw-bold mb-3">
                                We Build Websites That Turn <span className="text-gradient">Visitors Into Customers</span>
                            </h1>
                            <p className="lead text-muted mb-4">
                                A conversion-focused website system designed for modern businesses that want real results, not just good design.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                <Button as={Link} to="/contact" className="btn-premium px-4 py-3">Book a Free Strategy Call</Button>
                                <Button as={Link} to="/services" className="btn-premium-outline px-4 py-3">See how it works</Button>
                            </div>
                        </Col>
                        <Col lg={6} className="position-relative">
                            <div className="premium-card p-2 shadow-lg">
                                <img 
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                                    alt="Dashboard Preview" 
                                    className="img-fluid rounded-3"
                                />
                                <div className="position-absolute top-0 start-0 translate-middle-y mt-5 ms-n4 d-none d-md-block">
                                    <div className="premium-card p-3 shadow-sm border-0 bg-white">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="rounded-circle bg-success p-2" style={{opacity: 0.1}}>
                                                <TrendingUp size={20} className="text-success" />
                                            </div>
                                            <div>
                                                <div className="small text-muted">Conversion</div>
                                                <div className="fw-bold">+120%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Trust Signals */}
            <section className="py-4 bg-white border-top border-bottom">
                <Container>
                    <Row className="text-center align-items-center">
                        <Col xs={12} className="mb-3">
                            <span className="text-muted small text-uppercase ls-wide fw-bold">Trusted by growing businesses</span>
                        </Col>
                        <Col md={3} xs={6} className="mb-3 mb-md-0">
                            <h4 className="fw-bold mb-0">2.5x</h4>
                            <p className="small text-muted mb-0">Conversion Uplift</p>
                        </Col>
                        <Col md={3} xs={6} className="mb-3 mb-md-0">
                            <h4 className="fw-bold mb-0">A+</h4>
                            <p className="small text-muted mb-0">Speed Score</p>
                        </Col>
                        <Col md={3} xs={6}>
                            <h4 className="fw-bold mb-0">100%</h4>
                            <p className="small text-muted mb-0">Mobile Optimized</p>
                        </Col>
                        <Col md={3} xs={6}>
                            <h4 className="fw-bold mb-0">24/7</h4>
                            <p className="small text-muted mb-0">Lead Tracking</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Problem & Solution */}
            <section className="section-padding">
                <Container>
                    <Row className="justify-content-center text-center mb-5">
                        <Col lg={8}>
                            <h2 className="display-6 fw-bold">Why Your Current Website Is Failing</h2>
                            <p className="text-muted">Most websites are digital brochures. We build digital sales machines.</p>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="premium-card h-100 border-danger" style={{borderStyle: 'dashed'}}>
                                <h3 className="h4 fw-bold mb-4 text-danger">The Problem</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-start gap-2">
                                        <span className="text-danger">●</span>
                                        <span>Website looks good but generates zero leads.</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-2">
                                        <span className="text-danger">●</span>
                                        <span>Visitors land and don't know where to click.</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-2">
                                        <span className="text-danger">●</span>
                                        <span>No trust elements or clear value proposition.</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="premium-card h-100 border-success" style={{borderStyle: 'dashed'}}>
                                <h3 className="h4 fw-bold mb-4 text-success">The Solution</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-start gap-2">
                                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                                        <span>Strategic user journey mapping for high conversion.</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-2">
                                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                                        <span>Strong, placed CTAs that drive user action.</span>
                                    </li>
                                    <li className="mb-3 d-flex align-items-start gap-2">
                                        <CheckCircle className="text-success flex-shrink-0" size={20} />
                                        <span>Real-time lead capture and conversion tracking.</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Preview */}
            <section className="section-padding bg-white">
                <Container>
                    <div className="d-flex justify-content-between align-items-end mb-5">
                        <div>
                            <h2 className="fw-bold">Our Core Services</h2>
                            <p className="text-muted mb-0">Tailored solutions for your business growth.</p>
                        </div>
                        <Button as={Link} to="/services" variant="link" className="text-decoration-none fw-bold p-0" style={{color: 'var(--accent-indigo)'}}>View All Services →</Button>
                    </div>
                    <Row className="g-4">
                        {[
                            { icon: <TrendingUp size={32} />, title: 'Conversion-Focused Design', text: 'Layouts engineered to guide users to take action and convert.' },
                            { icon: <Smartphone size={32} />, title: 'Mobile-First Performance', text: 'Lightning fast load times on all devices, because every second counts.' },
                            { icon: <Search size={32} />, title: 'Lead Capture Systems', text: 'Automated forms and tracking to never miss a potential customer again.' }
                        ].map((service, idx) => (
                            <Col lg={4} key={idx}>
                                <div className="premium-card h-100 d-flex flex-column align-items-start">
                                    <div className="p-3 rounded-3 mb-4" style={{backgroundColor: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-indigo)'}}>
                                        {service.icon}
                                    </div>
                                    <h4 className="fw-bold mb-3">{service.title}</h4>
                                    <p className="text-muted flex-grow-1">{service.text}</p>
                                    <Link to="/services" className="text-decoration-none fw-bold small text-uppercase ls-wide" style={{color: 'var(--accent-indigo)'}}>Learn More</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="section-padding text-center">
                <Container className="premium-card py-5 shadow-lg border-0 bg-dark text-white">
                    <h2 className="display-6 fw-bold mb-3">Ready to turn your website into a sales asset?</h2>
                    <p className="opacity-75 mb-5 mx-auto" style={{maxWidth: '600px'}}>Stop losing customers to bad design. Let's build a website that delivers results month after month.</p>
                    <Button as={Link} to="/contact" className="btn-premium px-5 py-3 fs-5">Start Your Project Today</Button>
                </Container>
            </section>
        </div>
    );
};

export default Home;
