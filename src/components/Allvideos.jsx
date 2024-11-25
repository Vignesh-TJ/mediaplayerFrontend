import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getVideoApi, updateCategoryApi } from '../services/allApi';


function Allvideos({addStatus,setCategoryVDStatus}) {
  const [video,setVideo]=useState([])
  const [deletStatus,setDeleteStatus]=useState({})

  const getallVideo=async()=>{
    const result=await getVideoApi()
   setVideo(result.data)
  }
  console.log(video)
const dragOver=(e)=>{
  e.preventDefault()
}
const videoDrop=async(e)=>{
  const {videoDetails,categoryDetails}=JSON.parse(e.dataTransfer.getData("Details"))
    console.log(videoDetails,categoryDetails);
    let result=categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)
    const reqBody={
      category:categoryDetails.category,
      allVideos:result,
      id:categoryDetails.id

    }
    const response=await updateCategoryApi(categoryDetails.id,reqBody)
    console.log(response)
   
    if(response.status>=200 && response.status<300){
      setCategoryVDStatus(result)
    }
    else{
      toast.warning('something went wrong')
    }
}




  useEffect(()=>{
    getallVideo()
  },[addStatus,deletStatus])
  return (
   <>
   <h4 className='mt-5'>All Videos</h4>
   {video?.length>0?
   <div className="container-fluid p-3 mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
    <div className="row">
        {
          video?.map((item)=>(
            <div className="col-md-3 p-2">
            <Videocard videoDetails={item} setDeleteStatus={setDeleteStatus}/>
        </div>
          )

          )
        }
       
    </div>
   </div>
   :
   <div className="container-fluid mt-5"  >
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" width={'100%'} alt="" />
        <h4 className='text-center text-danger'>Video no added yet....</h4>
      </div>
      <div className="col-md-4"></div>
    </div>
   </div>
}
   </>
  )
}

export default Allvideos