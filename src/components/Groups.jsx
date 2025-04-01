// components/Groups.js
import React from 'react';
import { Link } from 'react-router-dom';

function Groups() {
  return (
    <div className="groups-page">
      <nav className="dashboard-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/groups" className="nav-link active">Groups</Link>
      </nav>
      
      <div className="groups-content">
        <h1>MONEYMATES - Groups</h1>
        {/* Groups content would go here */}
      </div>
    </div>
  );
}

export default Groups;