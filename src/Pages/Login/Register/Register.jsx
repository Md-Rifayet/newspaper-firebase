import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/Authprovider'

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false)

  const handelRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)

    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser )
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const handleAccepted = event =>{
     setAccepted(event.target.checked)
  }

  return (
    <Container className='mx-auto w-25'>
        <h3>Please Register</h3>
         <Form onSubmit={handelRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={handleAccepted}
        type="checkbox" 
        name='accept' 
        label={<>Accept <Link to='/terms'>Terms and Conditionss</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <br />
      <Form.Text className="text-success">
         <Link to="/login">All ready have an Account?</Link>
        </Form.Text>
        
    </Form>
    </Container>
  )
}

export default Register