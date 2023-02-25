import { DeleteFilled, EditFilled } from '@ant-design/icons';
import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import {  UserOwnPostApi } from '../../ApiRequest/Api';
import { DeleteBlogPost } from '../../helper/DeleteAlert';
import { SuccessToast } from '../../helper/FormHelper';


const UserOwnPost = () => {

  const navigate = useNavigate()
  
  let [DataList, SetDataList] = useState([]);

  const EditPostItem=(id)=>{

    navigate("/UpdatePost/"+id)

  }

  const DeletePostItem=(id)=>{
    DeleteBlogPost(id).then((res)=>{
      if(res===true){
        SuccessToast("Post Delete Sucess")
        window.location.reload()
      
      
      }})
  }
      
    
  useEffect(() => {

    UserOwnPostApi().then((Result) => {
      SetDataList(Result.data)
    
    })

  }, [])

 


  return (
    <div>
      <div className="container">
        <table className="table table-hover ">
          <thead className="table_header">
            <tr>
             
              
              <th> Post Image</th>
              <th>Post Title</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>

          { DataList.map((item,i)=>{
            return(
              <tr className="table_document">
              <td><img className="list-img" alt="Photo." src={item.image} /></td>
            
              <td ><h6>{item.title}</h6></td>
              
              <td>
                <button onClick={EditPostItem.bind(this,item._id)} className=" m-2 btn bg-success text-light" ><EditFilled/> </button>
                <button onClick={DeletePostItem.bind(this,item._id)} className="btn bg-danger text-light"><DeleteFilled/></button>
              </td>

            </tr>

            )

          })}
          </tbody>
        </table>

      </div>


    </div>
  )
}

export default UserOwnPost
