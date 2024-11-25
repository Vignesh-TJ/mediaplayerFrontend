import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <>

  <div className='py-5 px-3'>
    <div className='container-fluid'>
    <div className="row">
    <div className="col-md-4 mt-4 mt-md-0">
    <h2 className='text-danger'><FontAwesomeIcon icon={faVideo}   /> Media Player</h2>

    <p style={{alignItems:'justify'}} className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima, totam ipsum eum facilis tenetur, magni ea pariatur ullam, aperiam provident eveniet nostrum dolorum porro assumenda modi? Dolores, dicta accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates.</p>
    </div>
    <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
    <div>
    <h3>Links</h3>
     <Link to={'/'}> <p className='mt-3'>LandingPage</p></Link>
     <Link to={'/home'}> <p>Home Page</p></Link>
     <Link to={'/watchhistory'}><p>Watch History</p></Link>
    </div>

    </div>
    <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
     <div>
     <h3>Guides</h3>
      <p>React</p>
      <p>React-bootstrap</p>
      <p>Bootswatch</p>
     </div>
    </div>
    <div className="col-md-4 mt-4 mt-md-0">
      <h3>Contact us</h3>
     <div className='d-flex mt-3'>
     <input type="text" placeholder='Email id' className='form-control' /> 
     <button className='btn btn-warning ms-3'>subsccribe</button>
     </div>
     <div className=' mt-4 d-flex justify-content-evenly'>
     <a href="" className='text-success'><FontAwesomeIcon icon={faInstagram}  size="2x" /></a>
      <a href="" className='text-success'><FontAwesomeIcon icon={faXTwitter}  size="2x" /></a>
      <a href="" className='text-success'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
      <a href="" className='text-success'><FontAwesomeIcon icon={faLinkedin}  size="2x" /></a>
      <a href="" className='text-success'><FontAwesomeIcon icon={faWhatsapp}  size="2x" /></a>
     </div>
    </div>
  </div>
    </div>
  </div>
   </>
  )
}

export default Footer