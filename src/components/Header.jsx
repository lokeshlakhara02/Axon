import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>What is solar power ?</h1>
      <nav>
        <Link to="/report">Power BI Report</Link>
      </nav>
    </div>
  )
}

export default Header