import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeftNav = () => {
  const [categories, setCategoties ] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => setCategoties(data))
    .catch(error => setCategoties(error))
  },[])
  return (
    <div>
      <h4>All Category</h4>
      <div className='ps-4'>
      {
        categories.map(category => <p
        key={category.id}>
          <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
        </p>)
      }
      </div>
    </div>
  )
}

export default LeftNav