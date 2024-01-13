import React from 'react';
import logo from '../../../../src/assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee"
import { Button, Container} from 'react-bootstrap'; // Import Button from 'react-bootstrap' library

const Header = () => {

  return (
    <Container className='mt-4'>
      <div className='text-center'>
        <img src={logo} alt="" />
        <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format('dddd, MMMM D YYYY')}</p>
      </div>
      <div className='d-flex'>
        <Button variant='danger'>Laest News</Button>
        <Marquee className='text-danger' speed={80}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus architecto dolores hic repellat commodi, ab obcaecati! </Marquee>
      </div>
    </Container>
  );
};

export default Header;
