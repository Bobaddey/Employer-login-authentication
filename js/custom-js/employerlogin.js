

fetch('https://api.lancers.app/v1/auth/employer-login',{
    method:'POST',
    headers:{
        'Content-Type': "application/json"
    },
    body:JSON.stringify(
        {
        "email":'tundeafolayan@ymail.com',
        "password":"Qwerty12@"
   }
   ),
}
)
  .then(data=>(data.json()))
  .then(Response=>console.log(Response))
  .catch(error=> console.error());
  console.log(Response.data.token);

 