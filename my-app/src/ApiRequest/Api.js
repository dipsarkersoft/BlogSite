import axios from "axios"
import {ErrorToast,SuccessToast} from "../helper/FormHelper"

const BaseUrl="http://localhost:8000/api/v1"



export function RegistrationUser(name,mobile,password,email,photo) {
     
     const url=BaseUrl +"/registrationUser"
     const body={
          name,
          email,
          mobile,
          password,
          photo
     }
    
  return   axios.post(url,body)
     .then((res)=>{
          if(res.status===200){
               if(res.data['status']==="fail"){
                    if(res.data['data']['keyPattern']['email']===1){
                        ErrorToast("Email Already Exist")
                        return false;
                    }

                    else{
                        ErrorToast("Something Went Wrong")
                        return false;
                    }
                }
                else {
                    SuccessToast("Registration Success")
                    return true;

                }
            }
            else{
                ErrorToast("Something Went Wrong")
                return  false;
            }


     })
     .catch((error)=>{
          ErrorToast(" Went Wrong")
            return false
     })

    




}