import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'


function Watchhistory() {
  const [allHisVideo,setAllHisVideo]=useState([])
  const [deleteStatus,setDeleteStatus]=useState([])


    const handleDelete=async(id)=>{
      const result= await deleteHistoryVideoApi(id)
      console.log(result)
      if(result.status>=200 && result.status<300){
        setDeleteStatus(result)
      }
      else{
        alert('something went wrong')
      }
    }


const getallVideo =async()=>{
  const result=await getAllVideoHistoryApi()
  setAllHisVideo(result.data)
  console.log(result.data)
}
  

  useEffect(()=>{
getallVideo()
  },[deleteStatus])
  return (
   <>
 <div className='d-flex justify-content-between px-5 mt-5'>
    <h5>Watch History</h5>
   <Link style={{textDecoration:'none'}}> <h5><FontAwesomeIcon icon={faHouse}  className='me-2'/><span className='d-none d-md-inline'>Back Home</span></h5></Link>
   </div>
   { allHisVideo?.length>0 ?  
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10 table-responsive">
      <table className='table table-bordered rounded mt-5'>
        <thead>
          <tr>
            <th className='text-center'>#</th>
            <th className='text-center'>Caption</th>
            <th className='text-center'>Url</th>
            <th className='text-center'>Timestamp</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {allHisVideo?.map((item,index)=>(
              <tr>
              <td className='text-center'>{index+1}</td>
              <td className='text-center'>{item?.caption}</td>
              <td className='text-center'><Link to={item?.url}>{item?.url}</Link></td>
              <td className='text-center'>{item?.timeStamp}</td>
              <td className='text-center'>
                <button onClick={()=> handleDelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
              </td>
            </tr>

          ))}
        
        </tbody>
      </table>
      </div>
      <div className="col-md-1"></div>
    </div>
   </div>

  : <h3 className='text-center text-danger'>NO watch history...</h3>}
   </>
  )
}

export default Watchhistory