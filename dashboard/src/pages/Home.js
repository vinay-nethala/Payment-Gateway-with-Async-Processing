import React, { useState, useEffect } from 'react';

function Home() {
    const [stats, setStats] = useState({
        totalPayments: 0,
        successfulPayments: 0,
        pendingPayments: 0,
        totalRevenue: 0
    });
    const [recentTransactions, setRecentTransactions] = useState([]);

    // Mock data for demonstration
    useEffect(() => {
        // Simulate fetching stats
        setStats({
            totalPayments: 1250,
            successfulPayments: 1180,
            pendingPayments: 45,
            totalRevenue: 250000
        });

        // Mock recent transactions
        setRecentTransactions([
            { id: 'pay_123', amount: 5000, status: 'success', date: '2024-01-20' },
            { id: 'pay_124', amount: 2500, status: 'pending', date: '2024-01-20' },
            { id: 'pay_125', amount: 10000, status: 'success', date: '2024-01-19' },
            { id: 'pay_126', amount: 7500, status: 'failed', date: '2024-01-19' },
            { id: 'pay_127', amount: 3200, status: 'success', date: '2024-01-18' }
        ]);
    }, []);

    const getStatusBadge = (status) => {
        const classes = {
            success: 'badge-success',
            pending: 'badge-pending',
            failed: 'badge-failed'
        };
        return <span className={`badge ${classes[status] || ''}`}>{status}</span>;
    };

    return (
        <div className="container">
            <h1>Payment Gateway Dashboard</h1>

            {/* Stats Cards */}
            <div className="stats-grid">
                <div className="stat-card">
                    <h3>Total Payments</h3>
                    <div className="stat-value">{stats.totalPayments.toLocaleString()}</div>
                </div>
                <div className="stat-card">
                    <h3>Successful Payments</h3>
                    <div className="stat-value success">{stats.successfulPayments.toLocaleString()}</div>
                </div>
                <div className="stat-card">
                    <h3>Pending Payments</h3>
                    <div className="stat-value pending">{stats.pendingPayments.toLocaleString()}</div>
                </div>
                <div className="stat-card">
                    <h3>Total Revenue</h3>
                    <div className="stat-value">₹{stats.totalRevenue.toLocaleString()}</div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="card">
                <h2>Recent Transactions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>₹{transaction.amount.toLocaleString()}</td>
                                <td>{getStatusBadge(transaction.status)}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Test Credentials */}
            <div className="card">
                <h2>Test Credentials</h2>
                <div className="form-group">
                    <label>API Key</label>
                    <input type="text" value="key_test_abc123" readOnly />
                </div>
                <div className="form-group">
                    <label>API Secret</label>
                    <input type="text" value="secret_test_xyz789" readOnly />
                </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
                <h2>Quick Actions</h2>
                <p>Use the navigation above to:</p>
                <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                    <li>Configure webhooks and view delivery logs</li>
                    <li>Access API documentation and integration guides</li>
                    <li>Monitor payment statuses and transaction history</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
