import React from 'react'
import { Link } from 'react-router-dom';

function Company() {
  return (
    <>
        <div>Company</div>
        <Link to={`/about`}>aboutへ</Link>
    </>
  )
}

export default Company