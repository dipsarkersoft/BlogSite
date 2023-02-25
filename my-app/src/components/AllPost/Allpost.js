import React, { useEffect, useState } from 'react'

import { SuccessToast } from '../../helper/FormHelper'
import  {Allpost,postByid}  from '../../ApiRequest/Api'
import { useNavigate } from 'react-router-dom'


const Post = () => {
  const navigate=useNavigate()
  let [DataList,SetDataList]=useState([]);

 
  useEffect(()=>{

    Allpost().then((Result)=>{
          SetDataList(Result.data)
          
      })
      
  },[])
  
  
  const ReadPostItem=(id)=>{
   
     navigate("/selectpost/"+id)
  }

  return (
    <div className='container'>

      <div class="row">
      
      { DataList.map((item,i)=>{
              return(
          <div class="col-sm-4 mb-3 mb-sm-0">
          <div class="card">
          <img src={item.image} class="card-img-top" alt=" "/>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>           
              <h6 className="date card-link">Post by : {item.name}</h6>
              <p className="card-text">Publish Date:{item.createdAt}</p>
              
              <button onClick={ReadPostItem.bind(this,item._id)} class="btn btn-primary">Read Post</button>
            </div>
          </div>
        </div>)})}
      
       </div>
      
     </div>
   )}

  


export default Post