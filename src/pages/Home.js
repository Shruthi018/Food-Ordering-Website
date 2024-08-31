import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import front2 from "../images/front2.jpeg"
import "../styles/HomeStyles.css"
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${front2})`}}>
        <div className='headerContainer'>
        <h1 className="glow-title">Discover the Best Meals in Town</h1>
        <p className="glow-title">Order Now and Satisfy Your Cravings!</p>
        <p className="glow-title">Best Food In India.</p>
        <Link to="/menu">
             <button className="order-button">ORDER NOW</button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home