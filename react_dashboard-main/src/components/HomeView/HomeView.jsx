import React, { PureComponent } from 'react';
import '../HomeView/HomeView.css';
import { 
  BarChart, 
  LineChart, 
  Line, 
  Bar, 
  Rectangle, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
  } from 'recharts'



const HomeView = () => {

    const data = [
      {
        name: 'Watches',
        current: 400,
        previous: 240,
        amt: 2400,
      },
      {
        name: 'Accessories',
        current: 300,
        previous: 139,
        amt: 2210,
      },
      {
        name: 'Dresses',
        current: 200,
        previous: 98,
        amt: 2290,
      },
      {
        name: 'Sunglasses',
        current: 270,
        previous: 308,
        amt: 2000,
      },
      {
        name: 'Shoes',
        current: 180,
        previous: 480,
        amt: 2181,
      },
      {
        name: 'Bags',
        current: 230,
        previous: 380,
        amt: 2500,
      },
      {
        name: 'Hats/Caps',
        current: 340,
        previous: 430,
        amt: 2100,
      },
    ];


  return (
    <>
    <main className='main-container'>
        <div className='main-title'>
            <h2>Hi,welcome back</h2>
        </div> 

        <div className='main-cards'>
            <div className='card'>
                <div className='inner-cards'>
                    <h3>Customers</h3>
                    <i className="fa-solid fa-house"></i>
                </div>
                <h1>200</h1>
            </div>

            <div className='card'>
                <div className='inner-cards'>
                    <h3>Orders</h3>
                    <i className="fa-solid fa-note-sticky"></i>
                </div>
                <h1>400</h1>
            </div> 

            <div className='card'>
                <div className='inner-cards'>
                    <h3>Products</h3>
                    <i className="fa-solid fa-house"></i>
                </div>
                <h1>150</h1>
            </div> 
        </div>


        <div className='charts'>
          {/* Bar Chart */}
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" fill="#7A316F" activeBar={<Rectangle fill="orchid" stroke="brown" />} />
          <Bar dataKey="previous" fill="#9681EB" activeBar={<Rectangle fill="plum" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

{/* 
      Line Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="previous" stroke="#7A316F" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="current" stroke="#9681EB" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    </main>
    </>
  )
}


export default HomeView;