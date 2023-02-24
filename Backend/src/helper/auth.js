const jwt=require("jsonwebtoken")



exports.createToken = (result)=>{

     const payload = {
        
         'email': result.email ,
         "name":result.name
         
     };
 
     return jwt.sign(payload, process.env.SECRET_KEY, {
         expiresIn: '7d'
     });
 }