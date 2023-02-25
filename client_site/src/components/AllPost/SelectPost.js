
import { React, useEffect, useState } from 'react'
import { PostByid } from "../../ApiRequest/Api"
import { useNavigate, useParams } from "react-router-dom";

const SelectPost = () => {


     const navigate = useNavigate()
     const params = useParams()
     const id = params.id


     let [DataList, SetDataList] = useState([]);


     useEffect(() => {
          PostByid(id).then((res) => {

               SetDataList(res.data)
          })
     }, [])

     //console.log(DataList)


     return (
          <>

          { DataList.map((item, i) => {
                    return (
                         <div className='container'>
                              <div className='row '>
                                   
                                   <div className='col-md-6 ALLpost'>
                                        <img src={item.image} class="" alt="..." />
                                   </div>
                                   <div className='col-md-6 ALLpost'>

                                        <h2>{item.title}</h2>
                                        <p >{item.description}</p>
                                        
                                   </div>

                              </div>
                         </div>

                    )
               })
          }


        </>
     )
}

export default SelectPost
