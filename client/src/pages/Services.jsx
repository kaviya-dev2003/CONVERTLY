import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Layout, Zap, Target, BarChart, Rocket, Shield } from 'lucide-react';

const Services = () => {
    const serviceList = [
        {
            icon: <Layout className="text-primary" />,
            title: "Conversion Website Design",
            description: "We don't just design for looks; we design for conversion. Every pixel is placed to guide your users toward taking action.",
            points: ["Custom UI/UX Design", "Clear Navigation Structure", "Primary & Secondary CTA Strategy"]
        },
        {
            icon: <Zap className="text-primary" />,
            title: "Performance Optimization",
            description: "Speed is a conversion factor. We optimize every image and script to ensure your site loads faster than your competitors.",
            points: ["Web Vitals Optimization", "Image Compression", "Caching Strategies"]
        },
        {
            icon: <Target className="text-primary" />,
            title: "Lead Capture Integration",
            description: "Never lose a lead again. We integrate high-performing forms and tracking systems directly into your website dashboard.",
            points: ["Custom Form Building", "Auto-responder Setup", "Lead Source Tracking"]
        }
    ];

    return (
        <div className="services-page py-5">
            <Container>
                <header className="text-center mb-5 pb-lg-5">
                    <h1 className="display-4 fw-bold">Services Designed to <span className="text-gradient">Convert</span></h1>
                    <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>
                        Every service is built with performance, clarity, and growth in mind. We help you bridge the gap between traffic and revenue.
                    </p>
                </header>

                <Row className="g-5">
                    {serviceList.map((service, idx) => (
                        <Col lg={12} key={idx}>
                            <div className="premium-card p-4 p-md-5">
                                <Row className="align-items-center">
                                    <Col md={8}>
                                        <div className="d-flex align-items-center gap-3 mb-4">
                                            <div className="bg-light p-3 rounded-circle">{service.icon}</div>
                                            <h2 className="mb-0 fw-bold">{service.title}</h2>
                                        </div>
                                        <p className="fs-5 text-muted mb-4">{service.description}</p>
                                        <Row>
                                            {service.points.map((point, pIdx) => (
                                                <Col sm={6} key={pIdx} className="mb-2">
                                                    <div className="d-flex gap-2 align-items-center fw-medium">
                                                        <Shield size={16} className="text-success" />
                                                        {point}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                    <Col md={4} className="mt-4 mt-md-0 text-md-end">
                                        <button className="btn-premium px-4 py-3 w-100">Request This Service</button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
