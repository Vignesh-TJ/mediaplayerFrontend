import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { commonApi } from '../services/commonApi';

function Add({setAddStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails,setvideoDetails]=useState({
    caption:"",
    Imgurl:"",
    embedlink:""
  })
  console.log(videoDetails);
  

    


  const handleClose = () => {setShow(false) 
    handleCancel()
  }
  const handleShow = () => setShow(true);
  const handleCancel=()=>{
    setvideoDetails({
      caption:'',
      Imgurl:'',
      embedlink:''

    })
  }
  const handleAdd=async()=>{
    const{caption,Imgurl,embedlink}=videoDetails
    if(!caption|| !Imgurl||!embedlink){
      alert('please fill form')
    }
    else{
      if(embedlink.startsWith('https://youtu.be')){
        let link=`https://www.youtube.com/embed/${embedlink.slice(17,28)}`;
        const result= await addVideoApi({caption,Imgurl,embedlink:link})
        console.log(link);
        if(result.status>=200 && result.status<300){
          toast.success('uploaded sucessfully')
          handleClose()
          setAddStatus(result)
        }
        
      }
      else{
        let link=`https://www.youtube.com/embed/${embedlink.slice(-11)}`
        const result=await addVideoApi({caption,Imgurl,embedlink:link})

        console.log(link);
        if(result.status>=200 && result.status<300){
          alert('uploaded sucessfully')
          handleCancel()
          setAddStatus(result)

        }

      }
      
      
    }
  }

  return (
    <>
      <h5>
      <span className='d-none d-md-inline'>Upload new videos</span>
     <FontAwesomeIcon icon={faCloudArrowUp} onClick={handleShow} className='fa-2x ms-3' />
    </h5>


      <Modal show={show} onHide={handleClose} className='p-3'>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>please fill the following details</Modal.Body>
        <div className='container border border-secondary  p-3'>
            <input type="text" value={videoDetails.caption} id='one' placeholder='videoCaptin' className='form-control mt-2' onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})} />
            <input type="text"  value={videoDetails.Imgurl} placeholder='Videoimg' className='form-control mt-2'onChange={(e)=>setvideoDetails({...videoDetails,Imgurl:e.target.value})} />
            <input type="text"  value={videoDetails.embedlink}  placeholder='video Url' className='form-control mt-2'onChange={(e)=>setvideoDetails({...videoDetails,embedlink:e.target.value})} />

        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
           Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Add;