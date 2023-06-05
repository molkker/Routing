import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <div>Home</div>
        <Link to={`/about`}>aboutへ</Link>
        <Link to={`/company`}>companyへ</Link>
    </>
  )
}

export default Home