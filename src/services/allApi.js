import { commonApi } from "./commonApi"
import {serveUrl} from "./serveUrl"


// api to add video
export const addVideoApi=async(reqBody)=>{
    return await commonApi('POST',`${serveUrl}/video`,reqBody)
}

// api to get all video
 export const getVideoApi = async()=>{
    return await commonApi('GET',`${serveUrl}/video`,'')
 }

 // api to delete a video
 export const removeVideo= async(id)=>{
    return await commonApi('DELETE',`${serveUrl}/video/${id}`,{})
 }
//  api to add history
  
export const addHistoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serveUrl}/history`,reqBody)
}
// api to get all videos from history
export const getAllVideoHistoryApi=async()=>{
    return await commonApi('GET',`${serveUrl}/history`,'')
}
// api to delete
export const deleteHistoryVideoApi= async(id)=>{
    return await commonApi('DELETE',`${serveUrl}/history/${id}`,{})
 }


export const addCategoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serveUrl}/category`,reqBody)
}
export const getAllCategoryApi=async()=>{
    return await commonApi('GET',`${serveUrl}/category`,'')
}
export const deleteCategoryApi= async(id)=>{
    return await commonApi('DELETE',`${serveUrl}/category/${id}`,{})
 }
//  api to update category
export const updateCategoryApi=async(categoryid,reqBody)=>{
    return await commonApi('PUT',`${serveUrl}/category/${categoryid}`,reqBody)

}
