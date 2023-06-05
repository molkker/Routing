import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
        <div>About</div>
        <Link to={`/company`}>companyへ</Link>
    </>
  )
}

export default About