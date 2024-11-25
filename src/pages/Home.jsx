import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'

function Home() {
  const [addStatus,setAddStatus]=useState({})
  const [categoryVDStatus,setCategoryVDStatus]=useState({})
  return (
    <>
    <div className='container d-flex justify-content-between mt-5'>
      <Add setAddStatus={setAddStatus}/>
      <Link to={'/watchhistory'} className='text-decoration-none'>  <h5 ><span className='d-none d-md-inline'>Watch history</span> <FontAwesomeIcon className='me-2' icon={faClockRotateLeft} /></h5> </Link>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <Allvideos addStatus={addStatus} setCategoryVDStatus={setCategoryVDStatus}/>
        </div>
        <div className="col-md-3">
          <Category categoryVDStatus={categoryVDStatus}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home