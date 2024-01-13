import moment from 'moment';
import React from 'react'
import {FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar} from 'react-icons/fa'
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {title, _id, details, image_url, author, total_view, rating} = news;
  return (
    <div>
        <Card className=" mb-4 mt-4">
      <Card.Header className='d-flex align-item-center'>
        <Image style={{height: "40px"}} src={author?.img} roundedCircle />
        <div className='ps-2 flex-grow-1'>
          <p className='mb-0'>{author?.name}</p> <p><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
        </div>
        <div className=''>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
            {
                details.length < 250 ? <>{details}</> :
                <>{details.slice(0,250)}...<Link to = {`/news/${_id}`}>Read More</Link></>
                
            }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
          <div className='flex-grow-1'>
              <Rating
              placeholderRating={rating.number}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}></Rating>
              <span>{rating?.number}</span>
          </div>
          <div>
              <FaEye></FaEye>{total_view}
           </div>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default NewsCard