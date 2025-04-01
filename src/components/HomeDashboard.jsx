// components/HomeDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import BalanceSummary from './BalanceSummary';

function HomeDashboard() {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <Link to="/" className="nav-link active">Home</Link>
        <Link to="/groups" className="nav-link">Groups</Link>
      </nav>
      
      <div className="dashboard-content">
        <h1>MONEYMATES</h1>
        <UserProfile />
        <BalanceSummary />
      </div>
    </div>
  );
}

export default HomeDashboard;