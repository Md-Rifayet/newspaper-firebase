import React from 'react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <div>
        <h2>Terms & Conditions</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eos autem possimus doloremque doloribus! Nobis consectetur impedit atque quas maxime fugiat quod, autem neque, similique sequi magni dicta alias cupiditate.</p>
        <p>Go Back to <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Terms