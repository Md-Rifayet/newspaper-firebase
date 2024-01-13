import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import EditorsInsights from '../EditorsInsights/EditorsInsights'
import NavigationBar from '../../Shared/NavigationBar/NavigationBar'

const News = () => {
  const news = useLoaderData();
  const {title, _id, details, image_url,category_id} = news;
  return (
    <div>
      <NavigationBar></NavigationBar>
        <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="danger"><FaArrowLeft></FaArrowLeft>All News in This Category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsights></EditorsInsights>
    </div>
  )
} 

export default News