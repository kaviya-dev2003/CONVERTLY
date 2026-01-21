const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');

    // Initialize Tables
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM('admin', 'staff') DEFAULT 'staff',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    const createLeadsTable = `
        CREATE TABLE IF NOT EXISTS leads (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            business_type VARCHAR(255),
            message TEXT,
            status ENUM('new', 'contacted', 'closed') DEFAULT 'new',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    db.query(createUsersTable, (err) => {
        if (err) console.error('Error creating users table:', err);
    });

    db.query(createLeadsTable, (err) => {
        if (err) console.error('Error creating leads table:', err);
    });
});

// Routes
app.get('/', (req, res) => {
    res.send('CONVERTLY API is running...');
});

// Lead Capture Route
app.post('/api/leads', (req, res) => {
    const { name, email, business_type, message } = req.body;
    const query = 'INSERT INTO leads (name, email, business_type, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, business_type, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to submit lead' });
        }
        res.status(201).json({ message: 'Lead captured successfully', id: result.insertId });
    });
});

// Admin Stats Route (Placeholder - No Auth yet)
app.get('/api/admin/stats', (req, res) => {
    db.query('SELECT COUNT(*) as totalLeads FROM leads', (err, leadsResult) => {
        if (err) return res.status(500).json({ error: err.message });
        
        db.query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 10', (err, recentLeads) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({
                totalLeads: leadsResult[0].totalLeads,
                recentLeads: recentLeads
            });
        });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
