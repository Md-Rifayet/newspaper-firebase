import React from 'react'
import './RightNav.css'
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import bg from '../../../assets/bg.png'
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
  return (
    <div>
        <h4 className='mt-4'>Login With</h4>
        <Button className='mb-2 mt-3 w-100 border border-dark' variant="light"> <FaGoogle /> Login With Google</Button>
        <Button className='w-100 border border-dark' variant="light"> <FaGithub /> Login With Github</Button>

        <div className='mt-3'>
          <h4>Find us on</h4>
          <ListGroup>
      <ListGroup.Item className='mb-2 '> <FaFacebook/> Facbook</ListGroup.Item>
      <ListGroup.Item className='mb-2 '> <FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2 '> <FaInstagram/> Instargram</ListGroup.Item>
    </ListGroup>
        </div>
        <Qzone></Qzone>
        <div className = "photo-text">
          <img src={bg} alt="" />

          <div class='text-on-image'>
             <h1> Create an Amazing Newspaper </h1>
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat dolores nam quae, similique quibusdam quasi non qui totam dolore quidem facere dolorum quisquam doloribus. </p>
             <Button className='mt-3 w-50 h-100' variant="danger">Learn More</Button>
          </div>
        </div>
    </div>
  )
}

export default RightNav