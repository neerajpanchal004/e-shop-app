// import { NextResponse } from "next/server"
// import bodyParser from 'body-parser';
// const parseBody = bodyParser.json();

// function POST (request){

//     const SignupData =parseBody(request)
//     console.log(SignupData)

//     return NextResponse.json("receved")
// }


// pages/api/example.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request
    const Mobiles = {/* Your data here */};
    res.status(200).json(Mobiles);
  } else if (req.method === 'POST') {
    try {
      // Parse the request body
      const data = JSON.parse(req.body);

      // Perform any necessary operations with the data
      // For demonstration purposes, just echo the received data
      res.status(200).json({ message: 'POST request received', data });

      // Example: Send a POST request using Axios
      const response = await axios.post('YOUR_API_ENDPOINT', data);
      console.log('Axios POST response:', response.data);
    } catch (error) {
      console.error('Error processing POST request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
