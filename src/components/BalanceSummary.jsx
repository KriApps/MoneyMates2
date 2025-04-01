// components/BalanceSummary.js
import React from 'react';

function BalanceSummary() {
  const totalBalance = 300;
  const groupBalances = [
    { name: 'Group1', amount: 150 },
    { name: 'Group2', amount: 150 }
  ];

  return (
    <div className="balance-summary">
      <h3>Your Total Balance: £{totalBalance}</h3>
      <h4>Your balance split across groups:</h4>
      <ul className="group-balances">
        {groupBalances.map((group, index) => (
          <li key={index}>
            {group.name}: £{group.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BalanceSummary;