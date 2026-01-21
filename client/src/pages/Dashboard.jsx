import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Card, Badge } from 'react-bootstrap';
import { Users, MousePointer2, UserPlus, FileText } from 'lucide-react';
import axios from 'axios';

const Dashboard = () => {
    const [stats, setStats] = useState({ totalLeads: 0, recentLeads: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/admin/stats');
                setStats(res.data);
            } catch (err) {
                console.error("Error fetching stats", err);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const statCards = [
        { title: 'Total Leads', value: stats.totalLeads, icon: <UserPlus className="text-primary" />, change: '+12% from last month' },
        { title: 'Conversion Rate', value: '3.2%', icon: <MousePointer2 className="text-success" />, change: '+0.5% growth' },
        { title: 'Page Views', value: '1,420', icon: <Users className="text-warning" />, change: 'Steady traffic' },
        { title: 'Active Projects', value: '8', icon: <FileText className="text-info" />, change: '4 nearing launch' },
    ];

    return (
        <div className="dashboard-page py-5 bg-light min-vh-100">
            <Container>
                <div className="mb-5 d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="fw-bold h2">Admin Dashboard</h1>
                        <p className="text-muted mb-0">Overview of your conversion performance and leads.</p>
                    </div>
                    <Badge bg="white" text="dark" className="border p-2 px-3 rounded-pill shadow-sm">
                        <div className="d-flex align-items-center gap-2">
                            <span className="bg-success rounded-circle" style={{width: 8, height: 8}}></span>
                            System Live
                        </div>
                    </Badge>
                </div>

                <Row className="g-4 mb-5">
                    {statCards.map((stat, idx) => (
                        <Col lg={3} md={6} key={idx}>
                            <div className="premium-card border-0 shadow-sm h-100">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div className="bg-light p-2 rounded-3">{stat.icon}</div>
                                </div>
                                <h6 className="text-muted small fw-bold text-uppercase ls-wide">{stat.title}</h6>
                                <h2 className="fw-bold mb-2">{stat.value}</h2>
                                <p className="small text-success mb-0 fw-medium">{stat.change}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="premium-card border-0 shadow-sm overflow-hidden">
                    <div className="p-4 border-bottom d-flex justify-content-between align-items-center bg-white">
                        <h5 className="fw-bold mb-0">Recent Leads</h5>
                        <button className="btn btn-sm btn-outline-primary fw-bold">Export CSV</button>
                    </div>
                    <div className="table-responsive">
                        <Table hover className="mb-0 align-middle">
                            <thead className="bg-light">
                                <tr>
                                    <th className="px-4 py-3 text-muted border-0">Name</th>
                                    <th className="py-3 text-muted border-0">Business Type</th>
                                    <th className="py-3 text-muted border-0">Email</th>
                                    <th className="py-3 text-muted border-0">Status</th>
                                    <th className="py-3 text-muted border-0">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.recentLeads.length > 0 ? (
                                    stats.recentLeads.map((lead) => (
                                        <tr key={lead.id}>
                                            <td className="px-4 py-3 fw-bold">{lead.name}</td>
                                            <td>{lead.business_type}</td>
                                            <td className="text-muted">{lead.email}</td>
                                            <td>
                                                <Badge bg={lead.status === 'new' ? 'primary' : 'success'} className="px-2 py-1">
                                                    {lead.status.toUpperCase()}
                                                </Badge>
                                            </td>
                                            <td className="text-muted small">
                                                {new Date(lead.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-5 text-muted">No leads captured yet.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;
