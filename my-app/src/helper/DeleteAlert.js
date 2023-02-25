import Swal from "sweetalert2";
import { DeleteIteam } from "../ApiRequest/Api";


export function DeleteBlogPost(id){

   return  Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            return DeleteIteam (id).then((result)=>{
                  return result
              })

        }
    })


}