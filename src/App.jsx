import React from 'react'

export default function () {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="card bgc-orange">
            <img src="public/sedan.svg" alt="Sedans" />
            <h2>SEDANS</h2>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className='text-orange'>Learn More</button>
          </div>
          <div className="card bgc-light-green">
            <img src="public/suv.svg" alt="Suvs" />
            <h2>SUVS</h2>
            <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            <button className='text-light-green'>Learn More</button>
          </div>
          <div className="card bgc-dark-green">
            <img src="public/luxury.svg" alt="Luxury" />
            <h2>LUXURY</h2>
            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </p>
            <button className='text-dark-green'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
