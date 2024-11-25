import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <Container style={{marginTop:'90px',marginBottom:'60px'}} >
      <Row>
     
         <Col sm={12} md={6} style={{alignContent:"center"}}>
         <h3>Welcome to <span className='text-danger'>Media Player</span></h3>
         <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error doloremque magnam voluptatum soluta culpa, obcaecati nam voluptas temporibus ipsa pariatur similique quidem nisi accusamus cum itaque. Quam error repellat possimus.</p>
      <Link to={'/home'}>   <button className='btn btn-warning mt-5'>
          Get Started
         </button></Link>
         
         </Col>
       
         <Col sm={12} md={6}>
         <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='w-75' />
         </Col>
      </Row>
    </Container>
    <Container className='mt-4'>
      <Row>
        <Col sm={12} md={12}><h1 className='text-center my-5'>Features</h1></Col>
      </Row>
      <Row>
        <Col md={4}>
        <Card  className=' bg-success mb-4 p-3' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2023/04/19/07/00/07-00-06-593_512.gif" height={'400px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
        <Col md={4}>  <Card className='bg-success mb-4 p-3' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.tenor.com/11u8gg1tMs4AAAAC/music-rock.gif" height={'400px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
        <Col md={4}>  <Card  className='bg-success mb-4 p-3' style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://media.tenor.com/11u8gg1tMs4AAAAC/music-rock.gif" height={'400px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
       
      </Row>
    </Container>
   <Container>
    <Row className='border border-white m-5 p-3'>
      <Col md={6}>
      <h1 className='text-warning'>Simple Fast and Powerful</h1>
      <p><span style={{fontSize:'30px'}}>Play everthing</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum libero, aliquam adipisci recusandae minima voluptates perferendis error aut quas suscipit cum dignissimos exercitationem voluptatibus culpa, odit ducimus ab nesciunt?</p>
      <p><span style={{fontSize:'30px'}}>Play everthing</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum libero, aliquam adipisci recusandae minima voluptates perferendis error aut quas suscipit cum dignissimos exercitationem voluptatibus culpa, odit ducimus ab nesciunt?</p>
      <p><span style={{fontSize:'30px'}}>Play everthing</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum libero, aliquam adipisci recusandae minima voluptates perferendis error aut quas suscipit cum dignissimos exercitationem voluptatibus culpa, odit ducimus ab nesciunt?</p>


      </Col>
      <Col md={6} >
      <iframe width="100%" height="600" src="https://www.youtube.com/embed/ijBxe70sd8M" title="Achacho - Video Song | Aranmanai 4  | Sundar.C | Tamannaah | Raashii Khanna | Hiphop Tamizha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    </Col>
    </Row>
   </Container>

   

    </>
  )
}

export default Landingpage