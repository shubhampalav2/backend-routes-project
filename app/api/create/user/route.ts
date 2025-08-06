export async function POST(request:Request){
    //accessing the request body data
    const res=await request.json();
    console.log("Request body is ",res);
    
   //Checking if any fields are non empty
  for (const key of Object.keys(res)) {
    if (res[key].trim().length === 0) {
      console.log(res[key]);
      return Response.json({
        success: false,
        message: "All fields are mandatory"
      }, {
        status: 422
      });
    }
  }
    return Response.json({
        success:true,
        message:"User added successfully"
    },{
        status:200
    });
}