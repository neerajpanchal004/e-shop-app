// // import { LoginDetails } from "../data";

// //  export async function POST(req,res){
// //     const Login = []
// //     const user = req.body;

    
// //     return  res.status(200).json({message:"User signup"})


// //  }


// export default function handler(req, res) {
//     if (req.method !== 'POST') {
//       res.status(405).send({ message: 'Only POST requests allowed' })
//       return
//     }
  
  
//     // not needed in NextJS v12+
//     const {email} = JSON.parse(body);
//     res.status(200).json({ email });
  
//     // the rest of your code
//   }