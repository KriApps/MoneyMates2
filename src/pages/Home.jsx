import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

  const data = [
    { name: 'Group 1', amount: 100 },
    { name: 'Group 2', amount: 40 },
    { name: 'Group 3', amount: 160 },
  ];
  

  return (

    <main className='main-container'>
      <div className='main-title'>
        <h3>Welcome back John Doe</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Your current balance</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>£300.00</h1>
        </div>
      </div>

      {/* Chart moved OUTSIDE main-cards for full width */}
      <div className='charts'>
        <div className='chart-box'>
          <h3 className='chart-title'>Your balance across groups</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>



  )

}

export default Home
