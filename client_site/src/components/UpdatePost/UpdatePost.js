import {React,useEffect,useRef, useState} from 'react';
import {useNavigate,useParams} from "react-router-dom";
import {ErrorToast, IsEmpty,getBase64} from "../../helper/FormHelper"
import {PostByid, Update} from "../../ApiRequest/Api";




const UpdatePost= () => {

    let titleRef, descriptionRef,userImgRef,userImgView = useRef()


    const navigate = useNavigate()
     const params = useParams()
     const id = params.id


 let [DataList, SetDataList] = useState([]);

     useEffect(() => {
          PostByid(id).then((res) => {

               SetDataList(res.data)
          })
     }, [])

   

   const PreviewImage = () => {

    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img)=>{
         userImgView.src=base64Img;
    })
}

    const UpdateTask = () => {

        const title = titleRef.value
        const description = descriptionRef.value
        const image=userImgView.src
        
        if (IsEmpty(title)) {
            ErrorToast("Title Required")
        } else if (IsEmpty(description)) {
            ErrorToast("Description Required")
        } 
        else if (IsEmpty(image)) {
          ErrorToast("Upload A Image")
      } 
        else {
          
            Update(id,title, description,image).then((res) => {
                if (res == true) {
                    navigate("/")
                }


            })
        }}

        return (<>

            {
                DataList.map((item,i)=>(
                    <div fluid={true} className="content-body">
                    <row className="d-flex justify-content-center">
                        <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                            <div className="card">
                            <img  ref={(input)=>userImgView=input} className="icon-nav-img two" src={item.image} alt=""/>
                                <hr/>
                                <div className="card-body">
                                    <h4>Update Post</h4>
                                    <br/>
                                    <input  defaultValue={item.title} ref={(input) => titleRef = input} placeholder="Task Name"
                                           className="form-control animated fadeInUp" type="text"/>
                                    <br/>
                                    <textarea defaultValue={item.description} ref={(input) => descriptionRef = input} rows={5}
                                              placeholder="Task Description" className="form-control animated fadeInUp"
                                              type="text"/>

                                     <label>Post Image</label>
                                    <input onChange={PreviewImage}  ref={(input)=>userImgRef=input}  className="form-control animated fadeInUp " type="file"/>
                                    <br/>
                                    <button onClick={UpdateTask} className="btn  btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </row>
                </div>

                ))
            }
               
            
               </>
        );
    ;


}

export default UpdatePost;