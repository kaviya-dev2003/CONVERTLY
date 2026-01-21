import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Star, ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
    const studies = [
        {
            client: "SaaS Platform",
            metric: "+120% Leads",
            problem: "High traffic, but visitors weren't signing up for trials.",
            solution: "Redesigned landing pages with a focused user journey and trust-driven layout.",
            results: "Doubled trial signups within 30 days of launch."
        },
        {
            client: "Real Estate Agency",
            metric: "2.5x ROI",
            problem: "Existing site was slow and hard to navigate on mobile.",
            solution: "Built a mobile-first searching system with optimized lead forms.",
            results: "Inquiries increased by 150% in the first quarter."
        },
        {
            client: "Professional Services",
            metric: "A+ Speed Score",
            problem: "Outdated design and poor SEO performance.",
            solution: "Complete technical SEO overhaul and premium minimal redesign.",
            results: "Organic traffic increased by 80% and site speed improved by 300%."
        }
    ];

    return (
        <div className="case-studies-page py-5">
            <Container>
                <header className="text-center mb-5">
                    <h1 className="display-4 fw-bold">Real Results for Real <span className="text-gradient">Businesses</span></h1>
                    <p className="text-muted lead">Evidence of our commitment to growth and excellence.</p>
                </header>

                <Row className="g-4">
                    {studies.map((item, idx) => (
                        <Col lg={4} md={6} key={idx}>
                            <div className="premium-card h-100 p-4">
                                <Badge bg="success" className="p-2 px-3 rounded-pill mb-4 fs-6">{item.metric}</Badge>
                                <h4 className="fw-bold mb-3">{item.client}</h4>
                                <div className="mb-4">
                                    <p className="small text-uppercase fw-bold text-muted mb-1 ls-wide">The Challenge</p>
                                    <p className="text-muted">{item.problem}</p>
                                </div>
                                <div className="mb-4">
                                    <p className="small text-uppercase fw-bold text-muted mb-1 ls-wide">Our Approach</p>
                                    <p className="text-muted">{item.solution}</p>
                                </div>
                                <div className="mt-auto pt-3 border-top">
                                    <div className="d-flex align-items-center gap-2 fw-bold text-dark">
                                        View Full Story <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CaseStudies;
