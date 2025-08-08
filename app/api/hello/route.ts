export async function GET() {
    return Response.json({
       success:true,
       data:[
        {id:1,
         name:'Raman'
        },
        {id:2,
         name:'Love Babbar'
        },
        {id:3,
         name:'Seema'
        },
        {id:4,
         name:'Atul Lagad'
        }
       ],
       message: 'User List is fetched successfully' });
  }